import React from 'react';
import c from './Profile.module.css';
import {Profile} from './Profile';
import {AppRootStateType} from '../../redux/store-redux';
import {connect} from 'react-redux';
import {
    getProfileTC,
    getUserStatusTC,
    initialStateProfileType,
    setUserProfile,
    updateUserStatusTC
} from '../../redux/profile-reducer';
import {useParams} from 'react-router-dom';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import {usersAPI} from '../../api/api';


export type getProfileResponseType = null | {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string | undefined
        large: string | undefined
    }
}
type PathParamsType = {
    match: {
        params: {
            userId: string
        }
    }
}
type mapDispatchToPropsType = {
    addPost: (postText: string) => void
    updatePostText: (updateText: string) => void
    setUserProfile: (profile: getProfileResponseType) => void
    getProfileTC: (userId: number) => void
    getUserStatusTC: (userId: number) => void
    updateUserStatusTC: (status: string) => void
}
type mapStateToPropsType = initialStateProfileType
type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & PathParamsType

// wrapper for profileContainer, to use hook useParams
export function withRouter(Children: any) {
    return (props: any) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/> //return ProfileContainer (with "match" in props)
    }
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) userId= 28462;
        this.props.getProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    render() {

        return (
            <div className={c.profile}>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatusTC={this.props.updateUserStatusTC}
                />
            </div>
        )
    }
}



const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => { //data
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirect, //3
    withRouter, //2
    connect(mapStateToProps, {setUserProfile, getProfileTC, getUserStatusTC, updateUserStatusTC}),
    //1
)(ProfileContainer)
