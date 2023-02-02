import request from "./request";
import api from "./api"

export const productmetadata = (payload) => {
    return request(api.url.baseUrl + api.url.metadata, {
      method: "get",
      data: payload,
    });
  }; 