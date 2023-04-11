import React from 'react';
import c from './Profile.module.css';
import {Profile} from './Profile';
import {instance} from '../Users/UsersContainer';
import {AppRootStateType} from '../../redux/store-redux';
import {connect} from 'react-redux';

type ProfileContainerPropsType = {
    // store: StoreReduxType
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        instance.get(`profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div className={c.profile}>
                <Profile {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => { //data
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
    //прокидываем в компоненту
}

export default connect (mapStateToProps, {

})(ProfileContainer)