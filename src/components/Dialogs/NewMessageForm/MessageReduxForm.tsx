import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'


export type MessageFormDataType = {
    newMessage: string
}

const MessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" component="textarea" name="newMessage" placeholder="your message" />
                <button>Sent Message</button>
            </div>
        </form>
    );
};

export const MessageReduxForm = reduxForm<MessageFormDataType>({form: 'dialogMessageForm'})(MessageForm)

//  const ParentComponent = () => {
//     const onSubmit = (formData: FormDataType) => {
//         console.log(formData)         //data from fields
//
//     }
//
//     return (
//             <MessageReduxForm onSubmit={onSubmit}/>
//     );
// };




