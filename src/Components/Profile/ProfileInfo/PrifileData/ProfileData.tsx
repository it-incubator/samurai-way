import React from 'react';
import s from "../../MyPost/MyPost.module.css";
import {ProfileType} from "../../../../API/Profile-api";
import {ContactType} from "../ProfileInfo";

type ProfileDataType = {
    profileInfo: ProfileType
    contact: ContactType
    isOwners: boolean
    ActivateEditMode: () => void
}

export const ProfileData: React.FC<ProfileDataType> = ({
                                                           profileInfo, contact,
                                                           isOwners, ActivateEditMode, ...props
                                                       }) => {
    return (
        <div>
            {isOwners && <button onClick={ActivateEditMode}>edit</button>}
            <div><span className={s.boldText}>FullName:</span>{profileInfo.fullName}</div>
            <div><span className={s.boldText}>LookingJob:</span>{profileInfo.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div><span className={s.boldText}>LookingJob:</span>{profileInfo.lookingForAJobDescription}
            </div>
            <div>
                <b>Contact</b> :{Object.keys(contact).map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={contact[key]}/>
                }
            )}
            </div>
        </div>

    );
};

const Contact: React.FC<ContactType> = ({contactTitle, contactValue, ...props}) => {
    return <div>
        <b>{contactTitle}</b>:{contactValue}
    </div>
}

