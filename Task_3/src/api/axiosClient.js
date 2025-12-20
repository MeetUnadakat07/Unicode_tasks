import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://task4-authdb.onrender.com/auth",
});

// Attach token as HEADER (not cookie-based auth)
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
