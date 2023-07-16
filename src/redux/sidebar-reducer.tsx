import { v1 } from "uuid";

type SideBarFriendType = {
  id: string;
  name: string;
};
type SideBarType = {
  friends: SideBarFriendType[];
};
export type SideBarActionTypes = any;
//TODO

let initialState = {
  friends: [
    { id: v1(), name: "Sasha" },
    { id: v1(), name: "Kolya" },
    { id: v1(), name: "Andrey" },
  ],
};
export const sidebarReducer = (state: SideBarType = initialState, action: SideBarActionTypes) => {
  return state;
};
