import React from "react";
import c from "./ProfileInfo.module.css";
import { getProfileResponseType } from "../ProfileContainer";
import { ProfileStatusWithHooks } from "components/Profile/ProfileInfo/ProfileStatus/ProfileStatusWithHooks";
import { Loader } from "components/common/Loader/Loader";

type ProfileInfoPropsType = {
  profile: getProfileResponseType;
  status: string;
  updateStatusTC: (status: string) => void;
};

export const ProfileInfo = ({ profile, status, updateStatusTC }: ProfileInfoPropsType) => {
  if (!profile) {
    return <Loader />;
  }
  return (
    <div>
      <div className={c.about}>
        <img src={profile.photos.large} alt="ava" />
        <div>
          <span>{profile.fullName}</span>
          <ProfileStatusWithHooks status={status} updateStatusTC={updateStatusTC} />
          <ul>
            <li>Обо мне: {profile.aboutMe}</li>
            <li>В поисках работы: {profile.lookingForAJobDescription}</li>
            <li>
              Вебсайты:
              <ul>
                <li>facebook: {profile.contacts.facebook}</li>
                <li>website: {profile.contacts.website}</li>
                <li>vk: {profile.contacts.vk}</li>
                <li>twitter: {profile.contacts.twitter}</li>
                <li>instagram: {profile.contacts.instagram}</li>
                <li>youtube: {profile.contacts.youtube}</li>
                <li>github: {profile.contacts.github}</li>
                <li>mainLink: {profile.contacts.mainLink}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
