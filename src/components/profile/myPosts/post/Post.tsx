import style from './post.module.css'

type PostPropsType = {
    message: string
    like: number
    id?: number
}

export const Post = (props: PostPropsType) => {
    const { message, like } = props

    return (
        <div className={style.item}>
            <img className={style.avatar} src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/213245707/original/66a67e36fe8227d15c8c310cc112b60e74af5d6f/design-avatar-cartoon-for-business-gaming-social-media.jpg" alt="avatar" />
            <div>
            <span className={style.text}>{message}</span>
                <div>{ like }</div> 
            </div>
        </div>
    )
}