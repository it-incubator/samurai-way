import React from "react";
import c from "./ProfileInfo.module.css";
import { Loader } from "../../common/Loader/Loader";
import { getProfileResponseType } from "../ProfileContainer";
import { ProfileStatusWithHooks } from "components/Profile/ProfileInfo/ProfileStatus/ProfileStatusWithHooks";

type ProfileInfoPropsType = {
  profile: getProfileResponseType;
  status: string;
  updateStatusTC: (status: string) => void;
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div>
      {/*<div className={c.logo}>*/}
      {/*    <img src={bg} alt="bg"/>*/}
      {/*</div>*/}
      <div className={c.about}>
        {/*"https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"*/}
        <img src={props.profile.photos.large} alt="ava" />

        <div>
          <span>{props.profile.fullName}</span>
          <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC} />
          <ul>
            <li>Обо мне: {props.profile.aboutMe}</li>
            <li>В поисках работы: {props.profile.lookingForAJobDescription}</li>
            <li>
              Вебсайты:
              <ul>
                <li>facebook: {props.profile.contacts.facebook}</li>
                <li>website: {props.profile.contacts.website}</li>
                <li>vk: {props.profile.contacts.vk}</li>
                <li>twitter: {props.profile.contacts.twitter}</li>
                <li>instagram: {props.profile.contacts.instagram}</li>
                <li>youtube: {props.profile.contacts.youtube}</li>
                <li>github: {props.profile.contacts.github}</li>
                <li>mainLink: {props.profile.contacts.mainLink}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
