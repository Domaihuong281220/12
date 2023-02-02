import axios from "axios";

const url = {
  baseUrl: "http://103.157.218.115/CoffeeRoastery/hs/CoffeeRoastery",
  user: "/DogsPark2/V1/User",
  daycare: "/DogsPark2/V1/DayCare",
  activities: "/DogsPark2/V1/Activities",
  dogbreeds: "/DogsPark2/V1/Breeds",
  metadata: "/V1/CoffeeProduct"
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
