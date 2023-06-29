import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLength100, maxLength30, requiredField } from "../../../utils/validations/validations";
import { FormControl } from "../../common/FormsControls/FormsControls";

export type MessageFormDataType = {
  newMessage: string;
};
const Textarea = FormControl("textarea");
const MessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          component={Textarea}
          name="newMessage"
          placeholder="your message"
          validate={[requiredField, maxLength100]}
        />
        <button>Sent Message</button>
      </div>
    </form>
  );
};

export const MessageReduxForm = reduxForm<MessageFormDataType>({
  form: "dialogMessageForm",
})(MessageForm);
