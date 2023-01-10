import axios from "axios";

const instance = axios.create({
  baseURL: "https://3.6.86.16/440",
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `${localStorage.getItem("token")}`;
  return req;
});

export default instance;
