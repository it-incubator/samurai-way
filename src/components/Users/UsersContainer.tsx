import React from "react";
import { AppRootStateType } from "redux/store-redux";
import { connect } from "react-redux";
import { followTC, getUsersTC, initialStateUsersType, setCurrentPage, unFollowTC } from "redux/users-reducer";
import { Users } from "./Users";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingProgress,
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
    const { getUsersTC, currentPage, pageSize } = this.props;
    getUsersTC(currentPage, pageSize);
  }

  onPageChanged = (e: React.ChangeEvent<unknown>, clickedPage: number) => {
    const { getUsersTC, setCurrentPage, pageSize } = this.props;
    getUsersTC(clickedPage, pageSize);
    setCurrentPage(clickedPage);
  };

  render() {
    return (
      // <>
      //   {this.props.isFetching ? (
      //     <div className={c.loader}>{<Loader />}</div>
      //   ) : (
      <Users {...this.props} onPageChanged={this.onPageChanged} />
      // )}
      // </>
    );
  }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    users: getUsersSelector(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    followingProgress: getFollowingProgress(state),
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { setCurrentPage, getUsersTC, followTC, unFollowTC })
)(UsersContainer);

//коннект оборачивает то что в диспатче =>  это равно : () => store.dispatch(setFollowingProgress)
//все пропсы  из mapState.... в компоненту UsersContainer ( с помощью коннекта)
// !!! connect оборачивает наши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компоненте
