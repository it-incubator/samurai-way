import {MyPosts} from './myPosts/MyPosts'

import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {myPostsDataType, onChangePostsInput,} from "../../redux/state";

type ContentPropsType = {
    myPostsData: myPostsDataType[]
    onClickCallBack: (value: string, path: string) => void
    onChangeInput: (value: string) => void
    stateTextAreaValue: string
}

export const Content = (props: ContentPropsType) => {
    const {myPostsData, onClickCallBack, onChangeInput, stateTextAreaValue} = props

    return (
        <div>
            <ProfileInfo />
            <MyPosts myPostsData={myPostsData} onClickCallBack={onClickCallBack} onChangeInput={onChangeInput} stateTextAreaValue={stateTextAreaValue}/>
        </div>
    )
}