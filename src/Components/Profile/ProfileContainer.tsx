import React from 'react';
import {Profile} from "./ProfileInfo/Profile";
import {profileAPI, ProfileType} from "../../API/Profile-api";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ProfileInfoAppDateAC, ThunkGetUser} from "../../Redux/pageReducer";
import {AppDispatchType, StoreType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";





export  class ProfileContainer extends React.Component<WithRouterType> {

    componentDidMount() {

        let userId =this.props.match.params.userId

        if (!userId){userId='2'}

        this.props.setProfileInfo(userId)




    }

    render() {

        return      (
            <div>
               <Profile profileInfo={this.props.profileInfo}  />
            </div>

        );
    }


};

export type ProfileContainerType = mapDispatchToPropsType & mapStateToPropsType

type mapDispatchToPropsType = {
    setProfileInfo: (userId:string)=>void
}

const mapDispatchToProps  = (dispatch:AppDispatchType):mapDispatchToPropsType => {
    return {
        setProfileInfo: (userId:string)=> {
            dispatch(ThunkGetUser(userId))
        }

    }

}

type mapStateToPropsType = {
    profileInfo: ProfileType
}

const mapStateToProps = (state:StoreType):mapStateToPropsType => {
  return {
      profileInfo:state.pageReducer.profileInfo
  }
}


type PathParamsType = {
userId:string
};




const WithRouterProfile = withRouter(ProfileContainer);

export const ProfileWrapper = connect(mapStateToProps, mapDispatchToProps)(WithRouterProfile);



type WithRouterType = RouteComponentProps<PathParamsType>&ProfileContainerType