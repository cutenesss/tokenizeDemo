import { IUser } from "../../../../typings"

export const USER_ACTION = {
    GET_USER_INFO: "GET_USER_INFO",
    SET_USER_INFO: "SET_USER_INFO"
}

export const getUserInfo = (user: IUser) => ({
    type: USER_ACTION.GET_USER_INFO,
    user
  })
  
  export const setUserInfo = (user: Partial<IUser>) => ({
    type: USER_ACTION.SET_USER_INFO,
    payload: user
  })