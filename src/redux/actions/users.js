import {
  SIGNUP_NEW_USER,
  FETCH_TOKEN,
  FETCH_TOKEN_FAILED,
  GET_USERINFO,
  UPDATE_PROFILEPIC,
  UPDATE_BGPIC,
} from "../constants";


import API_URLS from "../../api";
import { requestApi } from "../../helper";

export const signupAction = (userData) => {
  return async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.SIGNUP,
      method: "POST",
      body: {
        ...userData,
      },
    };
    await requestApi(data);
    dispatch({ type: SIGNUP_NEW_USER });
  };
};

export const signinAction = (userData) => {
  return async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.SIGNIN,
      method: "POST",
      body: {
        ...userData,
      },
    };
    await requestApi(data).then((res) => {
      dispatch({ type: FETCH_TOKEN, payload: res.data });
    });
  };
};
