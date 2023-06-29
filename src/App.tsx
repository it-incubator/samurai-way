import React from "react";
import "./App.css";
import { Navbar } from "components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { News } from "components/News/News";
import { Music } from "components/Music/News";
import { Settings } from "components/Settings/Settings";
import { SideBarContainer } from "components/Navbar/Sidebar/SideBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeAppTC } from "redux/app-reducer";
import { AppRootStateType } from "redux/store-redux";
import { Loader } from "components/common/loader/Loader";
import ProfileContainer, { withRouter } from "components/Profile/ProfileContainer";

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeAppTC();
  }
  render() {
    if (!this.props.isInitialized) {
      return <Loader />;
    } else
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <SideBarContainer />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/users/" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  //data
  return {
    isInitialized: state.app.isInitialized,
  };
};

export default compose(withRouter, connect(mapStateToProps, { initializeAppTC }))(App);

type AppPropsType = mapDispatchToPropsType & mapStateToPropsType;

type mapDispatchToPropsType = {
  initializeAppTC: () => void;
};
type mapStateToPropsType = {
  isInitialized: boolean;
};
