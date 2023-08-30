import React from 'react';
import s from "./FormControls.module.css"





export const FormControls = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : " ")}>
            <div>
                <input {...input} {...props}/>
            </div>

            {hasError && <span>
                {meta.error}
            </span>}


        </div>
    );
};

export default FormControls;