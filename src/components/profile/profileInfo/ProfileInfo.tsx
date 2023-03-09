import style from './profileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <>
            <div className={style.content__headImage}>
                <img className={style.avatar}
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt="river"/>
            </div>
            <div className={style.content__profile}>
                <div className={style.content__profile_avatar}>
                    <img
                        src="https://assets.website-files.com/58e46336bbd02c1a2dd27afc/599f95de9e639a0001ca9d51_panda-waving.png"
                        alt="avatar"/>
                </div>
                <div className={style.content__profile_info}>
                        asdadasdadas
                </div>
            </div>
        </>
    )
}