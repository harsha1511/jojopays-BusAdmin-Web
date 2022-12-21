import axios from "axios";

const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL
  baseURL: "http://172.31.47.61:888/",
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `${localStorage.getItem("token")}`;
  return req;
});

export default instance;
