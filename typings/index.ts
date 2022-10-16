import {ApiResponse} from 'apisauce';
export * from './User';
export * from './Market';

export type IResponse<R> = ApiResponse<R> & {
  showToast?: boolean;
};

export type IResponseError = IResponse<unknown> & {
  message?: string;
};

export type IRequest<P> = {
  endpoint: string;
  params?: P;
  showToast?: boolean;
  auth?: boolean;
};

export type RouteTab = {
  key: string;
  title: string;
};
