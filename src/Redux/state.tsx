import {DialogDataType} from "../App";


export type StoreType = {
    _State:DialogDataType;
    onChange:()=>void;
    getState:()=>DialogDataType
    subscriber:(observer:()=>void)=>void
    dispatch:(action:AllAction)=>void

}


export type AddPost = {
    type:'ADD-Post',
    postText:string
}

 export  type  AddPostDialogs = {
    type: 'AddPostDialogs'
    newDialogs:string
}

export  type UpdateText = {
    type:'UpdateText'
    newText:string
}

export type AllAction = AddPost|AddPostDialogs|UpdateText


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

     dispatch (action){
        if (action.type==='ADD-Post'){ let newPost = {id:5,message:this._State.profilePage.newPostText, likeCount:18}

            Store._State.profilePage.post.push(newPost)
            Store._State.profilePage.newPostText=''
            this.onChange()}
        else if (action.type==='AddPostDialogs'){ let newPost ={id:1,message:action.newDialogs}
            this._State.message.push(newPost)

            this.onChange()}
        else if (action.type ==='UpdateText'){
            this._State.profilePage.newPostText=action.newText

            this.onChange() }
        }



}



export  const AddPostActionCreator = (postText:string):AddPost=> {
    return {
        type:'ADD-Post',
        postText:postText
    }

}

export  const UpdateTextActionCreator = (newText:string):UpdateText=> {
    return {
        type:'UpdateText',
        newText:newText
    }

}










