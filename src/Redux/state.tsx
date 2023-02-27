import {DialogDataType} from "../App";
import {pageReducer} from "./pageReducer";
import {dialogsReducer} from "./dialogsReducer";


export type StoreType = {
    _State:DialogDataType;
    onChange:()=>void;
    getState:()=>DialogDataType
    subscriber:(observer:()=>void)=>void
    // dispatch:(action:AllAction)=>void

}


export const Store:StoreType = {
    _State : {
        data:[{id:1,name:'Hróðgeirr'},
            {id:2,name:'Eiríkr'},
            {id:3,name:'Hróðgeirr'},
            {id:4,name:'Egill'},
            {id:5,name:'Styrr'}
        ],
        message :[{id:1,message:'Å slite og slepe for å få endene til å møtes'},
            {id:2,message:'Å være i den sjuende himmel'},
            {id:3,message:'Å drive dank'},
            {id:4,message:'Å dra ved nesa'},
            {id:5,message:'Å gjøre en mygg til en elefant'}],

        profilePage :{ post : [{id:1,message:'Hi, how are you?', likeCount:12},
                {id:2,message:'Hi, how are you?', likeCount:10},
                {id:3,message:'Hi, how are you?', likeCount:8},
                {id:4,message:'Hi, how are you?', likeCount:6},],
            newPostText:'it-kamasutra'
        },

        sideBar : [{id:1,name:'Hróðgeirr'},
            {id:2,name:'Eiríkr'},
            {id:3,name:'Hróðgeirr'}]
    },
     onChange () {
        console.log('hi')
    },
    getState(){
        return this._State
    },
    subscriber (observer:()=>void) {
        this.onChange=observer
    },

     // dispatch (action){
     //
     //    pageReducer( Store,action)
     //    dialogsReducer(Store,action)
     //        this.onChange()
     //    }
}


export type AllAction = AddPost|AddPostDialogs|UpdateText

export type AddPost = ReturnType<typeof AddPostActionCreator>

export  const AddPostActionCreator = (postText:string)=> {
    return {
        type:'ADD-Post',
        postText:postText
    } as const

}

export  type UpdateText =ReturnType<typeof UpdateTextActionCreator>


export  const UpdateTextActionCreator = (newText:string)=> {
    return {
        type:'UpdateText',
        newText:newText
    } as const

}

export  type  AddPostDialogs = ReturnType<typeof AddPostDialogsActionCreator>


export  const AddPostDialogsActionCreator = (newDialogs:string)=> {
    return {
        type:'AddPostDialogs',
        newDialogs: newDialogs
    } as const

}










