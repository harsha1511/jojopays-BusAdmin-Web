import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

export default instance;
