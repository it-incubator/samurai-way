import React, { ReactNode } from "react";
import c from "./FormsControls.module.css";
import { Field } from "redux-form";
import { requiredField } from "utils/validations/validations";

export const FormControl =
  (Element: any) =>
  ({ input, meta, ...props }: any) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={c.formControl + " " + (hasError ? c.error : "")}>
        <Element {...input} {...props} />
        {hasError && <span> {meta.error} </span>}
      </div>
    );
  };

export const createField = (
  component: ReactNode,
  fieldType: string = "text",
  fieldName: string,
  placeholder?: string,
  labelText: string | null = null,
  required: boolean = true
) => {
  return (
    <>
      {labelText && <label htmlFor={fieldName}>{labelText}</label>}
      <Field
        className={c.field}
        type={fieldType}
        component={component}
        name={fieldName}
        validate={required && [requiredField]}
        placeholder={placeholder}
      />
    </>
  );
};
