import React from 'react';
import {Profile} from "./ProfileInfo/Profile";
import {ProfileType} from "../../API/Profile-api";
import {connect} from "react-redux";
import {ThunkChangStatus, ThunkGetStatus, ThunkGetUser} from "../../Redux/pageReducer";
import {AppDispatchType, StoreType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../Hoc/WithAuthRedirect";
import {compose} from "redux";








  class ProfileContainer extends React.Component<WithRouterType> {

    componentDidMount() {

        let userId =this.props.match.params.userId


        if (!userId){userId='23762'}

        this.props.setProfileInfo(userId)
        this.props.setStatus(userId)


    }

    componentDidUpdate(prevProps: Readonly<WithRouterType>, prevState: Readonly<{}>, snapshot?: any) {

    }

      render() {

        const ChangeStatus =(status:string)=> {
            this.props.changeStatus(status)
        }


        return      (
            <div>
               <Profile profileInfo={this.props.profileInfo}  status={this.props.status} changeStatusCallback={ChangeStatus}  />

            </div>

        );
    }


};

export type ProfileContainerType = mapDispatchToPropsType & mapStateToPropsType

type mapDispatchToPropsType = {
    setProfileInfo: (userId:string)=>void
    setStatus:(userId:string)=>void
    changeStatus:(status:string)=>void
}

const mapDispatchToProps  = (dispatch:AppDispatchType):mapDispatchToPropsType => {
    return {
        setProfileInfo: (userId:string)=> {
            dispatch(ThunkGetUser(userId))
        },
        setStatus:(userId:string)=> {
            dispatch(ThunkGetStatus(userId))
        },
        changeStatus:(status:string)=> {
            dispatch(ThunkChangStatus(status))
        }

    }

}

type mapStateToPropsType = {
    profileInfo: ProfileType
status:string

}

const mapStateToProps = (state:StoreType):mapStateToPropsType => {
  return {
      profileInfo:state.pageReducer.profileInfo,
      status:state.pageReducer.status




  }
}


type PathParamsType = {
userId:string

};




export default compose <React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainer)

type WithRouterType = RouteComponentProps<PathParamsType>&ProfileContainerType