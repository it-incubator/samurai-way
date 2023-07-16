import { appData, appReducer, setInitializedSuccessAC } from "../app-reducer";

describe("App reducer", () => {
  let initialState: appData;

  beforeEach(() => {
    initialState = {
      isInitialized: false,
      isLoading: false,
    };
  });

  it("should handle SET_INITIALIZED action", () => {
    const newState = appReducer(initialState, setInitializedSuccessAC());
    expect(newState.isInitialized).toBeTruthy();
  });
});
