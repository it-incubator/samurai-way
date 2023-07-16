import { AuthData, authReducer, setAuthUserData } from "../auth-reducer";

describe("Auth reducer", () => {
  let initialState: AuthData;

  beforeEach(() => {
    initialState = {
      id: null,
      email: null,
      login: null,
      isAuth: false,
    };
  });

  it("should  SET_USER_DATA in state", () => {
    const userData = {
      id: 1,
      email: "test@test.com",
      login: "test",
      isAuth: true,
    };

    const newState = authReducer(initialState, setAuthUserData(userData));

    expect(newState).toEqual({
      id: 1,
      email: "test@test.com",
      login: "test",
      isAuth: true,
    });
  });
});
