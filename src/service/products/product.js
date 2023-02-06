import request from "../request";
import api from "../api"

export const ProductSearchRequest = (payload) => {
    return request(api.url.baseUrl + api.url.findproduct + `?SerialNumber=${payload}`, {
      method: "get",
      data: payload,
    });
  };