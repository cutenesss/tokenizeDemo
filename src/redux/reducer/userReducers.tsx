import {saveObject, KEY} from '../../helpers';
import {USER_ACTION} from '../actions/userAction';
import {IUser} from '../../../typings';

type ActionUserReduxT = {
  payload: IUser;
  type: string;
};

const defaultState: IUser = {
  userId: 0,
  canAccessApi: false,
  email: '',
  roleId: 0,
  roleName: '',
  roleType: '',
  is2Faenabled: 0,
  tkxTrading: false,
  userType: '',
  token: '',
  emailNotificationStatus: false,
};

export default (state = defaultState, action: ActionUserReduxT) => {
  switch (action.type) {
    case USER_ACTION.SET_USER_INFO:
      saveObject(KEY.USER_DATA, action.payload);
      state = {
        ...state,
        ...action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};
