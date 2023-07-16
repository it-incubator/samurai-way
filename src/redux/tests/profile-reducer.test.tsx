import {
  addPost,
  deletePost,
  initialStateProfileType,
  profileReducer,
  setUserProfile,
  setUserStatus,
  updateUserStatus,
} from "redux/profile-reducer";
import { getProfileResponseType } from "components/Profile/ProfileContainer";

describe("profileReducer", () => {
  let initialState: initialStateProfileType;
  beforeEach(() => {
    initialState = {
      posts: [
        { id: "1", message: "Hi, how are you?", likes: 15 },
        { id: "2", message: "Hi, im fine thank you, and you?", likes: 10 },
      ],
      profile: null,
      status: "",
    };
  });

  it("should add a new post to the state", () => {
    const newPost = "New post text";
    const action = addPost(newPost);
    const newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe(newPost);
  });

  it("should set the user profile in the state", () => {
    const profile: getProfileResponseType = {
      aboutMe: "I'm a software engineer",
      contacts: {
        facebook: "https://www.facebook.com/my-profile",
        website: "https://www.my-website.com",
        vk: "https://vk.com/my-profile",
        twitter: "https://twitter.com/my-profile",
        instagram: "https://www.instagram.com/my-profile",
        youtube: "https://www.youtube.com/my-profile",
        github: "https://github.com/my-profile",
        mainLink: "https://my-profile.com",
      },
      lookingForAJob: true,
      lookingForAJobDescription: "I'm looking for new job opportunities",
      fullName: "John Doe",
      userId: 123,
      photos: {
        small: "https://www.my-profile.com/small.jpg",
        large: "https://www.my-profile.com/large.jpg",
      },
    };
    const action = setUserProfile(profile);
    const newState = profileReducer(initialState, action);
    expect(newState.profile).toBe(profile);
  });

  it("should set the user status in the state", () => {
    const status = "Hello, world!";
    const action = setUserStatus(status);
    const newState = profileReducer(initialState, action);
    expect(newState.status).toBe(status);
  });

  it("should update the user status in the state", () => {
    const status = "Hello, world!";
    const action = updateUserStatus(status);
    const newState = profileReducer(initialState, action);
    expect(newState.status).toBe(status);
  });

  it("should update the count of posts in the state", () => {
    const newState = profileReducer(initialState, deletePost("2"));
    expect(newState.posts.length).toBe(1);
  });
});
