import style from './Message.module.css'

type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {
    const {message} = props
    return (
                <div className={style.message}>{message}</div>
    )
}