import React from 'react';
import {Profile} from "./ProfileInfo/Profile";
import {ProfileType} from "../../API/Profile-api";
import {connect} from "react-redux";
import {
    EditModeAC,
    ThunkChangStatus,
    ThunkGetStatus,
    ThunkGetUser,
    ThunkSavePhoto,
    ThunkSaveProfile
} from "../../Redux/pageReducer";
import {AppDispatchType, StoreType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../Hoc/WithAuthRedirect";
import {compose} from "redux";
import {FormDataProfileType} from "./ProfileInfo/PrifileData/FormData";


class ProfileContainer extends React.Component<WithRouterType> {

    componentDidMount() {

        let userId = this.props.match.params.userId


        if (!userId) {
            userId = this.props.authorizedUserID
        }

        this.props.setProfileInfo(userId)
        this.props.setStatus(userId)


    }

    componentDidUpdate(prevProps: Readonly<WithRouterType>, prevState: Readonly<{}>, snapshot?: any) {

    }

    render() {

        const ChangeStatus = (status: string) => {
            this.props.changeStatus(status)
        }

        const SavePhoto = (photo: FormData) => {
            this.props.savePhoto(photo)
        }

        const SaveProfile = (formData: FormDataProfileType) => {
            this.props.saveProfile(formData)
        }
        return (
            <div>
                <Profile profileInfo={this.props.profileInfo}
                         status={this.props.status}
                         changeStatusCallback={ChangeStatus}
                         isOwners={!this.props.match.params.userId}
                         savePhoto={SavePhoto}
                         saveProfile={SaveProfile}
                         editMode={this.props.editMode}
                         changeEditMode={this.props.changeEditMode}
                />

            </div>

        );
    }


};

export type ProfileContainerType = mapDispatchToPropsType & mapStateToPropsType

type mapDispatchToPropsType = {
    setProfileInfo: (userId: string) => void
    setStatus: (userId: string) => void
    changeStatus: (status: string) => void
    savePhoto: (photo: FormData) => void
    saveProfile: (formData: FormDataProfileType) => void
    changeEditMode: () => void
}

const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToPropsType => {
    return {
        setProfileInfo: (userId: string) => {
            return dispatch(ThunkGetUser(userId))
        },
        setStatus: (userId: string) => {
            return dispatch(ThunkGetStatus(userId))
        },
        changeStatus: (status: string) => {
            return dispatch(ThunkChangStatus(status))
        },
        savePhoto: (photo: FormData) => {
            dispatch(ThunkSavePhoto(photo))
        },
        saveProfile: (formData: FormDataProfileType) => {
            return dispatch(ThunkSaveProfile(formData))
        },
        changeEditMode: () => {
            return dispatch(EditModeAC(true))
        }

    }

}

type mapStateToPropsType = {
    profileInfo: ProfileType
    status: string
    authorizedUserID: string
    editMode: boolean


}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        profileInfo: state.pageReducer.profileInfo,
        status: state.pageReducer.status,
        authorizedUserID: state.authReducer.data.id,
        editMode: state.pageReducer.editMode


    }
}


type PathParamsType = {
    userId: string

};


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainer)

type WithRouterType = RouteComponentProps<PathParamsType> & ProfileContainerType