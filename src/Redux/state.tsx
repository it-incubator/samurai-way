


let  onChange =()=> {
console.log('hi')
}

export const State =  {
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
}

export  const addPost = ()=> {
    let newPost = {id:5,message:State.profilePage.newPostText, likeCount:18}

    State.profilePage.post.push(newPost)
    State.profilePage.newPostText=''
    onChange()
}

export  const   AddPostDialogs=(newDialogs:string)=>{
    let newPost ={id:1,message:newDialogs}
    State.message.push(newPost)

    onChange()
}

export const ChangeText = (newText:string)=> {
    State.profilePage.newPostText=newText

    onChange()
}



export const  subscriber = (observer:()=>void)=> {
    onChange=observer
}

