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
  const u = user;
  return (
    <div key={u.id} className={c.userWrapper}>
      <div className={c.userLogoWrapper}>
        <div className={c.userLogo}>
          <NavLink to={"/profile/" + u.id}>
            <img src={u.photos.small ? u.photos.small : userPhoto} alt="ava" className={c.userPhoto} />
          </NavLink>
        </div>
        <div className={c.buttonWrapper}>
          {u.followed ? (
            <button disabled={followingProgress.some((id) => id === u.id)} onClick={() => unFollowTC(u.id)}>
              UnFollow
            </button>
          ) : (
            <button disabled={followingProgress.some((id) => id === u.id)} onClick={() => followTC(u.id)}>
              Follow
            </button>
          )}
        </div>
      </div>

      <div className={c.userInfoWrapper}>
        <div className={c.nameStatusWrap}>
          <div className={c.fullName}>{u.name}</div>
          <div className={c.status}>{u.status}</div>
        </div>
        <div className={c.locationWrap}>
          <div className={c.country}>{"User country"}</div>
          <div className={c.city}>{"User city"}</div>
        </div>
      </div>
    </div>
  );
};
