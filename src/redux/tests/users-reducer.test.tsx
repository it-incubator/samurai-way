import {
  followSuccess,
  initialStateUsersType,
  setUsers,
  unFollowSuccess,
  usersReducer,
  UserType,
} from "redux/users-reducer";

let initialState: initialStateUsersType;

beforeEach(() => {
  initialState = {
    users: [
      { id: 1, name: "User 1", followed: false, photos: { small: null, large: null }, status: "" },
      { id: 2, name: "User 2", followed: true, photos: { small: null, large: null }, status: "" },
      { id: 3, name: "User 3", followed: false, photos: { small: null, large: null }, status: "" },
    ],
    totalUsersCount: 3,
    pageSize: 3,
    currentPage: 1,
    followingProgress: [],
  };
});

it("should follow the user", () => {
  const userId = 1;
  const action = followSuccess(userId);

  const newState = usersReducer(initialState, action);

  expect(newState.users[0].followed).toBe(true);
});

it("should unfollow the user", () => {
  const userId = 2;
  const action = unFollowSuccess(userId);

  const newState = usersReducer(initialState, action);

  expect(newState.users[1].followed).toBe(false);
});

it("should set users", () => {
  const users: Array<UserType> = [
    { id: 4, name: "User 4", followed: false, photos: { small: null, large: null }, status: "" },
    { id: 5, name: "User 5", followed: true, photos: { small: null, large: null }, status: "" },
  ];
  const action = setUsers(users);

  const newState = usersReducer(initialState, action);

  expect(newState.users.length).toBe(2);
  expect(newState.users[0].name).toBe("User 4");
  expect(newState.users[1].name).toBe("User 5");
});

it("should set current page", () => {
  const clickedPage = 2;
  const action = { type: "SET-CURRENT-PAGE", clickedPage } as const;

  const newState = usersReducer(initialState, action);

  expect(newState.currentPage).toBe(clickedPage);
});

it("should set total users count", () => {
  const totalCount = 5;
  const action = { type: "SET-TOTAL-USERS-COUNT", totalCount } as const;

  const newState = usersReducer(initialState, action);

  expect(newState.totalUsersCount).toBe(totalCount);
});

it("should toggle following progress", () => {
  const userId = 1;
  const fetchingValue = true;
  const action = { type: "TOGGLE-FOLLOWING-PROGRESS", userId, fetchingValue } as const;

  const newState = usersReducer(initialState, action);

  expect(newState.followingProgress.length).toBe(1);
  expect(newState.followingProgress[0]).toBe(userId);

  const action2 = { type: "TOGGLE-FOLLOWING-PROGRESS", userId, fetchingValue: false } as const;
  const newState2 = usersReducer(newState, action2);

  expect(newState2.followingProgress.length).toBe(0);
});
