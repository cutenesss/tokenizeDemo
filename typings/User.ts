export interface IBodyLogin {
  email: string;
  password: string;
  captcha?: string;
  captchaBypass?: string;
}

export interface IUser {
  userId: number;
  canAccessApi: boolean;
  email: string;
  roleId: number;
  roleName: string;
  roleType: string;
  is2Faenabled: number;
  emailNotificationStatus: boolean;
  tkxTrading: boolean;
  userType: string;
  token: string;
}
