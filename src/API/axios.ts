import axios from "axios";

const instance = axios.create({
  baseURL: "https://13.232.175.86:443/",
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `${localStorage.getItem("token")}`;
  return req;
});

export default instance;
