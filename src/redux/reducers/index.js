import { combineReducers } from "redux";

import usersReducer from "./users"
/*
import linksReducer from "./linksReducer"
import qrcodesReducer from "./qrcodesReducer"
import subscribersReducer from "./subscribersReducer"
*/
import notificationsReducer from  "./notifications"

const allReducers = combineReducers({
    auth: usersReducer,
    notifications: notificationsReducer,
    /*
    links: linksReducer,
    qrcodes: qrcodesReducer,
    subscribers: subscribersReducer,
    */
})

export default allReducers