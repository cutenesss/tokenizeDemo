import APISauce, { ApiResponse } from "apisauce";
export * from './User'

export type IResponse<R> = ApiResponse<R> & {
    showToast?: boolean;
};

export type IResponseError = IResponse<unknown> & {
    message?: string;
};