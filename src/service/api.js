import axios from "axios";

const url = {
  baseUrl: "http://103.157.218.115/DogsPark/hs",
  user: "/DogsPark2/V1/User",
  daycare: "/DogsPark2/V1/DayCare",
  activities: "/DogsPark2/V1/Activities",
  dogbreeds: "/DogsPark2/V1/Breeds"
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default api;
