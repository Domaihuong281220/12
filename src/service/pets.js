import request from "./request";
import api from "./api"

export const getDogBreedsRequest = (payload) => {
  return request(api.url.baseUrl + api.url.dogbreeds, {
    method: "get",
    data: payload,
  });
};