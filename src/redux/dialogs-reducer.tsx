import { v1 } from "uuid";

//ACTIONS ================================================================================

export const addMessageAC = (newMessageText: string) =>
  ({ type: "ADD-MESSAGE", newMessage: newMessageText } as const);
// export const updateMessageAC = (messageUpdateText: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-TEXT',
//         messageUpdateText: messageUpdateText
//     } as const
// }

//REDUCER ================================================================================
export type initialStateDialogsType = typeof initialState;

let initialState = {
  dialogs: [
    { id: v1(), name: "Sasha" },
    { id: v1(), name: "Tanya" },
    { id: v1(), name: "Artem" },
    { id: v1(), name: "Regina" },
    { id: v1(), name: "Maksim" },
  ] as Array<DialogType>,
  messages: [
    { id: v1(), message: "Hello ! Dear friend !" },
    { id: v1(), message: "im afraid of this lessons" },
    { id: v1(), message: "when will you return?" },
    { id: v1(), message: "What films do you prefer?" },
    { id: v1(), message: "How are you?" },
  ] as Array<MessageType>,
  // newMessageText: '' //update from Dialogs textarea
};

export const dialogsReducer = (
  state: initialStateDialogsType = initialState,
  action: DialogsActionTypes
): initialStateDialogsType => {
  switch (action.type) {
    case "ADD-MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { id: v1(), message: action.newMessage }],
      };
    default:
      return state;
  }
};

//TYPES ================================================================================
export type DialogType = {
  id: string;
  name: string;
};
export type MessageType = {
  id: string;
  message: string;
};
export type DialogsActionTypes = ReturnType<typeof addMessageAC>;
