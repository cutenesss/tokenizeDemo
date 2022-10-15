export interface IUser {
  userId: number;
  canAccessApi: boolean;
  email: string;
  roleId: number;
  roleName: boolean;
  roleType: boolean;
  is2Faenabled: number;
  tkxTrading: boolean;
  userType: string;
  token: string;
}

export interface IBodyLogin {
  email: string;
  password: string;
  captcha: string;
  captchaBypass: string;
}

export interface ILogInResponse {}
