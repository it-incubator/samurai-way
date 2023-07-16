import { addMessageAC, dialogsReducer, DialogType, MessageType } from "../dialogs-reducer";

describe("Dialogs reducer", () => {
  let initialState: {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
  };

  beforeEach(() => {
    initialState = {
      dialogs: [
        { id: "1", name: "Sasha" },
        { id: "2", name: "Tanya" },
      ],
      messages: [
        { id: "1", message: "Hello!" },
        { id: "2", message: "How are you?" },
      ],
    };
  });

  it("should add a new message to the state", () => {
    const newMessage = "Test message";
    const action = addMessageAC(newMessage);

    const newState = dialogsReducer(initialState, action);

    expect(newState.messages.length).toBe(3);
    expect(newState.messages[2].message).toBe(newMessage);
  });
});
