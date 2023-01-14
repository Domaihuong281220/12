import request from "./request";
import api from "./api"

export const newDayCareRequest = (payload) => {
  return request(api.url.baseUrl + api.url.daycare, {
    method: "post",
    data: payload,
  });
};

export const activitiesGetAllRequest = (payload) => {
  return request(api.url.baseUrl + api.url.activities, {
    method: "get",
    data: payload,
  });
};