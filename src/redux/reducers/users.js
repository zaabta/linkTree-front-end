import {
  SIGNUP_NEW_USER,
  FETCH_TOKEN,
  FETCH_TOKEN_FAILED,
  GET_USERINFO,
  UPDATE_PROFILEPIC,
  UPDATE_BGPIC,
} from "../constants";

let initialState = {
  success: false,
  messages: "",
  data: {
    token: JSON.parse(window.localStorage.getItem("token") || null) ,
    user: JSON.parse(window.localStorage.getItem("userInfo") || null) ,
  },
  isAuthenticated: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action?.type) {
    case FETCH_TOKEN:
      window.localStorage.setItem("token", JSON.stringify(action?.payload?.data?.token));
      window.localStorage.setItem(
        "userInfo",
        JSON.stringify(action?.payload?.data?.user)
      );
      return {
        success: action?.payload?.success,
        messages: action?.payload?.messages,
        data: {
          user: action?.payload?.data?.user,
          token: action?.payload?.data?.token,
        },
        isAuthenticated: true,
      };
    case SIGNUP_NEW_USER:
      return {
        success: action?.payload?.success,
        messages: action?.payload?.messages,
        isAuthenticated: false,
      };
    case FETCH_TOKEN_FAILED:
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userInfo");
      return {
        success: false,
        data: {
          token: null,
          user: null,
        },
        isAuthenticated: false,
      };
    case GET_USERINFO:
      return {
        success: action?.payload?.success,
        messages: action?.payload?.messages,
        data: {
          ...state.data,
          userInfo: action?.payload?.data,
        },
        ...state,
      };

    default:
      return state;
  }
};

export default usersReducer;
