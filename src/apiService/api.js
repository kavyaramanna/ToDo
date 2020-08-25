import axios from "axios";
import { MY_URL } from "../config/qaqcbaseUrls";
// import localStorageHandler from "../storage/";
import APIRequest from "./apiRequest";

const API = () => {
  const defaultOptions = {
    baseURL: MY_URL,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const instance = axios.create(defaultOptions);
  instance.interceptors.request.use(
    (config) => onRequest(config),
    (error) => onRequestError(error)
  );
  instance.interceptors.response.use(
    (response) => onResponse(response),
    (error) => onResponseError(error)
  );
  return instance;
};
export default API();

//Request Interceptors
function onRequest(config) {
  const token = sessionStorage.getItem("accesstoken");
  if (window.location.pathname === "/login") {
    var clientId = "my-client";
    var clientSecret = "my-secret";
    var authorizationBasic = window.btoa(clientId + ":" + clientSecret);
    config.headers.Authorization = "Basic " + authorizationBasic;
  } else {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  }
  return config;
}

//Response Interceptors
function onResponse(response) {
  return response;
}

function onRequestError(error) {
  return error;
}
function onResponseError(error) {
  if (error.response.data.status == 401) {
    // localStorageHandler.removeSession();
    if (window.location.pathname != "/login") {
      window.location.reload("/login");
    }
  }
  if (error.response.data.status == 500) {
    alert("Service Unavailable");
  }
  return error;
}
