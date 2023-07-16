import React from "react";
import { AppRootStateType } from "redux/store-redux";
import { connect } from "react-redux";
import { followTC, getUsersTC, initialStateUsersType, setCurrentPage, unFollowTC } from "redux/users-reducer";
import { Users } from "./Users";
import { Loader } from "../common/Loader/Loader";
import c from "./Users.module.css";
import { compose } from "redux";
import {
  getCurrentPage,
  getFolowwingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from "redux/selectors/users-selectors";

type mapStateToPropsType = initialStateUsersType;
type mapDispatchToPropsType = {
  setCurrentPage: (clickedPage: number) => void;
  getUsersTC: (currentPage: number, pageSize: number) => void;
  followTC: (userId: number) => void;
  unFollowTC: (userId: number) => void;
};
export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (e: React.ChangeEvent<unknown>, clickedPage: number) => {
    this.props.getUsersTC(clickedPage, this.props.pageSize);
  };

  render() {
    return (
      <>
        <div className={c.loader}>{this.props.isFetching && <Loader />}</div>
        <Users
          {...this.props}
          onPageChanged={this.onPageChanged} //presentational component
        />
      </>
    );
  }
}

//component for server requests

// const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
//   //data
//   return {
//     users: state.usersPage.users,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     pageSize: state.usersPage.pageSize,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingProgress: state.usersPage.followingProgress,
//   };
//   //прокидываем в компоненту
// };

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  console.log("mapStateToProps USERS");
  //data
  return {
    // users: getUsers(state),
    users: getUsersSelector(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFolowwingProgress(state),
  };
  //прокидываем в компоненту
};

export default compose<React.ComponentType>(
  // withAuthRedirect, //2
  connect(mapStateToProps, { setCurrentPage, getUsersTC, followTC, unFollowTC }) //1
)(UsersContainer);

//коннект оборачивает то что в диспатче =>  это равно : () => store.dispatch(setFollowingProgress)
//все пропсы  из mapState.... в компоненту UsersContainer ( с помощью коннекта)
// !!! connect оборачивает наши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компоненте
