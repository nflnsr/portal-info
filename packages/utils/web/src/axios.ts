import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "./global-var";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL as string,
});

const axiosPrivateInstance = axios.create({
  baseURL: BASE_API_URL as string,
  withCredentials: true,
});

export { axiosInstance, axiosPrivateInstance, type AxiosResponse };
