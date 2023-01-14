import request from "./request";
import api from "./api"

export const userLoginRequest = (payload) => {
  return request(api.url.baseUrl + api.url.user, {
    method: "post",
    data: payload,
  });
};