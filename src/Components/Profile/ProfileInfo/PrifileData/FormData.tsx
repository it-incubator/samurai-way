import React from 'react';
import s from "../../MyPost/MyPost.module.css";
import {ProfileType} from "../../../../API/Profile-api";
import {ContactType} from "../ProfileInfo";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../../utils/validators/validators";
import FormControls from "../../../FormControls/FormControls";
import style from "../../../FormControls/FormControls.module.css";



type ProfileDataType = {
    initialValues: ProfileType
    contact :ContactType
    changeProfileData:(formData:FormDataProfileType)=>void
}

export type FormDataProfileType ={
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }



}

export const FormDataProfile:React.FC<ProfileDataType> = ({ initialValues,contact,changeProfileData,...props}) => {


    const onSubmit=(formData:FormDataProfileType)=> {

        changeProfileData(formData)

    }


    return (
        <div>
            <ProfileReduxForm  initialValues={initialValues} onSubmit={onSubmit}/>
        </div>

    );
};



const ProfileForm: React.FC<InjectedFormProps<FormDataProfileType>> = ({error,...props})=> {

    const contacts = props.initialValues.contacts as ContactType


    return (
        <div className={s.auth}>
            <form onSubmit={props.handleSubmit}>
                <div><button>save</button></div>
                {error &&
                    <div  className={style.error}>{error}</div>}
                <div>
                  <b>FullName</b> : <span> <Field validate={[required]} placeholder={'fullName'} name={'fullName'} component={FormControls} /></span>

                </div>
                <div>
                    <Field  placeholder={'lookingForAJob'} name={'lookingForAJob'} component={'input'}  type={'checkbox'} />
                </div>
                <div>
                    <Field validate={[required]} placeholder={'lookingForAJobDescription'} name={'lookingForAJobDescription'}   component={FormControls}/>
                </div>


                <div>
                    <div>

                        <b>Contacts</b> :<div>
                        {Object.keys(contacts).map((key) => {
                                return  <b>{key}: <Field   key={key} placeholder={key} name={"contacts."+ key}   component={FormControls}/></b>
                            }

                        )}

                    </div>
                    </div>

                </div>

            </form>


        </div>
    )
}



const ProfileReduxForm = reduxForm<FormDataProfileType>({form:"profile"})(ProfileForm)



