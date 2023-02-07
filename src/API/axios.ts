import axios from "axios";

const instance = axios.create({
  // baseURL: "http://13.232.250.90/",
  baseURL: "http://3.143.53.147/",
  // baseURL: "http://192.168.1.12:5000/",
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `${localStorage.getItem("token")}`;
  return req;
});

export default instance;
