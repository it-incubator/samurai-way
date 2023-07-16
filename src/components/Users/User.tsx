import React from "react";
import c from "components/Users/Users.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "assets/images/userPhoto.png";
import { UserType } from "redux/users-reducer";

export type UserPropsType = {
  user: UserType;
  followingProgress: Number[];
  unFollowTC: (userId: number) => void;
  followTC: (userId: number) => void;
};

export const User = ({ user, followingProgress, unFollowTC, followTC }: UserPropsType) => {
  return (
    <div key={user.id} className={c.userWrapper}>
      <div className={c.userLogoWrapper}>
        <div className={c.userLogo}>
          <NavLink to={"/profile/" + user.id}>
            <img src={user.photos.small ? user.photos.small : userPhoto} alt="ava" className={c.userPhoto} />
          </NavLink>
        </div>
        <div className={c.buttonWrapper}>
          {user.followed ? (
            <button
              disabled={followingProgress.some((id) => id === user.id)}
              onClick={() => unFollowTC(user.id)}
            >
              UnFollow
            </button>
          ) : (
            <button
              disabled={followingProgress.some((id) => id === user.id)}
              onClick={() => followTC(user.id)}
            >
              Follow
            </button>
          )}
        </div>
      </div>

      <div className={c.userInfoWrapper}>
        <div className={c.nameStatusWrap}>
          <div className={c.fullName}>{user.name}</div>
          <div className={c.status}>{user.status}</div>
        </div>
        <div className={c.locationWrap}>
          <div className={c.country}>{"User country"}</div>
          <div className={c.city}>{"User city"}</div>
        </div>
      </div>
    </div>
  );
};
