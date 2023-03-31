import style from './Message.module.css'

type MessagePropsType = {
    message: string
    id: number
}

export const Message = (props: MessagePropsType) => {
    const {message, id} = props

    return (
        <div className={style.messageWrapper}>
            <div className={style.avatar}></div>
            <div className={style.message}>{message}</div>
        </div>
    )
}