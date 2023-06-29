import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLength30, requiredField } from "../../../../utils/validations/validations";
import { FormControl } from "../../../common/FormsControls/FormsControls";

export type PostFormDataType = {
  newPost: string;
};
const Textarea = FormControl("textarea");
const PostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          component={Textarea}
          name="newPost"
          placeholder="post message"
          validate={[requiredField, maxLength30]}
        />
        <button>Add post</button>
      </div>
    </form>
  );
};

export const PostReduxForm = reduxForm<PostFormDataType>({
  form: "myPostsNewPostForm",
})(PostForm);
