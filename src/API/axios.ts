import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.32:8888/",
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `${localStorage.getItem("token")}`;
  return req;
});

export default instance;
