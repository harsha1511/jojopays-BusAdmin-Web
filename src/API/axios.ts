import axios from "axios";


const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

export default instance;
