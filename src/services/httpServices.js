import { nodeUrl } from "@/constants/constants";
import axios from "axios";
let AxiosCreator;

export const nodeApiUrl = nodeUrl;

if (typeof window !== "undefined") {
  AxiosCreator = axios.create({
    baseURL: nodeApiUrl,
    headers: {
      Authorization: localStorage?.getItem("accessToken") || "",
    },
  });

  AxiosCreator.interceptors.request.use((config) => {
    const configHeaders = config.headers;
    configHeaders.Authorization = localStorage?.getItem("accessToken") || "";
    return config;
  });

  AxiosCreator.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err?.response?.status === 401) {
        console.log("401 err : ", err);
        window.location.href = "/admin";
      }

      throw err?.response;
    }
  );
}

export default AxiosCreator;
