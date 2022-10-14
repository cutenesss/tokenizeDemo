import APISauce  from "apisauce";
import { AxiosRequestConfig } from "axios";
import {remove, KEY, save} from "../helpers";
import { handleErrorApi, } from "./handleError";
import {URL} from "../apis";
import { reset } from "../navigation/navigationService";
import { SCREEN_ROUTER_APP } from "../helpers";
import { IResponse } from "../../typings";

export type IRequest<P> = {
  endpoint: string;
  params?: P;
  showToast?: boolean;
  auth?: boolean
};

const rootServerInstance = APISauce.create({
  baseURL: URL.ROOT_API
});

const unAuthInstance = APISauce.create({
  baseURL: URL.ROOT_API
});

const getServerInstance = (auth?: boolean) => auth ? rootServerInstance : unAuthInstance

rootServerInstance.axiosInstance.interceptors.response.use((response) => {
  const token = response?.headers?.accesstoken
  if (token) {
    setToken(token)
  }
  return response;
}, (error) => {
  if (error.toString() === "Error: Request failed with status code 401") {
    // popupOk("Notification", "Session expired. Please login later!")
    reset(SCREEN_ROUTER_APP.LOG_IN)
    deleteToken()
  }
  return Promise.reject(error);
});


rootServerInstance.axiosInstance.interceptors.request.use(async (request) => {
  return request;
}, (error) => { return Promise.reject(error) })


const formdataConfig = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};

export async function getData<P, R>(
  request: IRequest<P>
): Promise<IResponse<R>> {
  return await getServerInstance(request.auth)
    .get<R>(request.endpoint, request.params)
    .then((response) => {
      return handleErrorApi<R>(response, request.showToast);
    });
}
export async function postData<P, R>(
  request: IRequest<P>
): Promise<IResponse<R>> {
  return await getServerInstance(request.auth)
    .post<R>(request.endpoint, request.params)
    .then((response) => {
      return handleErrorApi<R>(response, request.showToast);
    });
}

/**
 * This function use to set global token for api
 * @param token the authorization of api
 */
export const setToken = async (token: string) => {
  await rootServerInstance.setHeader("access_token", token)
  await remove(KEY.TOKEN)
  await save(
    KEY.TOKEN,
    token
  );
};

export const deleteToken = () => {
  rootServerInstance.deleteHeader("access_token")
  remove(KEY.TOKEN)
};

/**
 * This function use to set global token for api
 * @param token the authorization of api
 */
export const configToken = (request: AxiosRequestConfig, token?: string) => {
  // rootServerInstance.deleteHeader("access_token")
  if (token) return { ...request, headers: { access_token: token } }
  else return request
};
