import React from 'react';
import c from './FormsControls.module.css';


export const FormControl = (Element: any) => ({ input, meta, ...props }:any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ c.formControl + " " + (hasError ? c.error : "") }>
            <Element {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};

//в компоненте формы вызываем эту функцию и передаем название элемента, соотв. элемент отрисовывается в поле Field




