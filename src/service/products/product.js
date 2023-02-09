import request from "../request";
import api from "../api"

export const ProductSearchRequest = (payload) => {
    return request(api.url.baseUrl + api.url.findproduct + `?SerialNumber=${payload}`, {
      method: "get",
      data: payload,
    });
  };

export const ProductNoteRequest = (payload) => {
    return request(api.url.baseUrl + api.url.noteHierachy + `?SerialNumber=${payload}`, {
      method: "get",
      data: payload,
    });
  }