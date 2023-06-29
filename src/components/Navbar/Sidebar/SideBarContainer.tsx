import React from "react";
import { Sidebar } from "./Sidebar";
import { connect } from "react-redux";
import { AppRootStateType } from "../../../redux/store-redux";
import { SideBarActionTypes } from "../../../redux/sidebar-reducer";

const mapStateToProps = (state: AppRootStateType) => {
  return {
    friends: state.sideBar.friends,
  };
};
const mapDispatchToProps = (dispatch: (action: SideBarActionTypes) => void) => {
  //TYPE ??
  return {};
};

export const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
