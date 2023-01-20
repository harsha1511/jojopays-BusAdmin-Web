import axios from "axios";

const instance = axios.create({
  // baseURL: "http://13.127.192.32:80/",
  baseURL: "http://192.168.1.32:82/",
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `${localStorage.getItem("token")}`;
  return req;
});

export default instance;
