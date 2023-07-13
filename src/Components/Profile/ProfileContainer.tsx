import React from 'react';
import {Profile} from "./ProfileInfo/Profile";
import {profileAPI, ProfileType} from "../../API/Profile-api";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ProfileInfoAppDateAC} from "../../Redux/pageReducer";
import {StoreType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";





export  class ProfileContainer extends React.Component<WithRouterType> {

    componentDidMount() {

        let userId =this.props.match.params.userId

        if (!userId){userId='2'}

       profileAPI.getUser(userId).then((res) => {this.props.setProfileInfo(res.data)})


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
    setProfileInfo: (data:ProfileType)=>void
}

const mapDispatchToProps  = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        setProfileInfo: (data:ProfileType)=> {
            dispatch(ProfileInfoAppDateAC(data))
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