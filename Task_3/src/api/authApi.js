import api from "./axiosClient";

export const registerUser = (data) => api.post("/register", data);
export const loginUser = (data) => api.post("/login", data);
export const getCurrentUser = () => api.get("/me");
export const getAllUsers = () => api.get("/all");