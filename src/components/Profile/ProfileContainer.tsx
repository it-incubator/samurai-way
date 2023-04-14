import React from 'react';
import c from './Profile.module.css';
import {Profile} from './Profile';
import {instance} from '../Users/UsersContainer';
import {AppRootStateType} from '../../redux/store-redux';
import {connect} from 'react-redux';
import {initialStateProfileType, setUserProfile} from '../../redux/profile-reducer';
import {useParams} from 'react-router-dom';

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
}
type mapStateToPropsType= initialStateProfileType
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
        let userId = this.props.match.params.userId
        instance.get(`profile/${!userId? "2" : userId}`) //if no userId => to 2 user page
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div className={c.profile}>
                <Profile {...this.props}
                         profile={this.props.profile}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => { //data
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
