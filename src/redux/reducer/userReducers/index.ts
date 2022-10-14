import AsyncStorageUtils from "@src/helpers/AsyncStorageUtils";
import { USER_ACTION } from "../actions/userAction";
import { IUser } from "../../../../typings"


type ActionUserReduxT = {
  payload: IUser
  type: string
}

const defaultState: IUser = {
  userId: 0,
  canAccessApi: false,
  email: '',
  roleId: 0,
  roleName: false,
  roleType: false,
  is2Faenabled: 0,
  tkxTrading: false,
  userType: '',
  token: '',
};


export default (state = defaultState, action: ActionUserReduxT) => {
  switch (action.type) {
    case USER_ACTION.SET_USER_INFO:
      AsyncStorageUtils.saveObject(AsyncStorageUtils.KEY.USER_DATA, action.payload)
      state = {
        ...state,
        ...action.payload
      }
    default:
      break;
  }
  return state;
};
