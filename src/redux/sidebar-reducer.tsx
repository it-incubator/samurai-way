import {v1} from 'uuid';
import {followAC, setUsersAC, unFollowAC} from './users-reducer';

type SideBarFriendType = {
    id: string
    name: string
}
type SideBarType = {
    friends: SideBarFriendType[]
}
export type SideBarActionTypes = any // add

let initialState={
    friends: [
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Kolya'},
        {id: v1(), name: 'Andrey'},
    ]
}
const sidebarReducer=(state: SideBarType=initialState,action: SideBarActionTypes )=> {

    return state
}

export default sidebarReducer;