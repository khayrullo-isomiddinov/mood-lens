import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Backend API URL
});

// 🔐 Signup API
export const signup = async (userData) => {
  try {
    const response = await API.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Signup failed";
  }
};

// 🔐 Login API
export const login = async (userData) => {
  try {
    const response = await API.post("/auth/login", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};
