import { appData, appReducer, setInitializedSuccessAC } from "../app-reducer";

describe("App reducer", () => {
  let initialState: appData;

  beforeEach(() => {
    initialState = {
      isInitialized: false,
    };
  });

  it("should handle SET_INITIALIZED action", () => {
    const newState = appReducer(initialState, setInitializedSuccessAC());
    expect(newState.isInitialized).toBeTruthy();
  });

  it("should return the initial state if the action type is unknown", () => {
    const newState = appReducer(initialState, { type: "UNKNOWN_ACTION" });
    expect(newState).toEqual(initialState);
  });
});
