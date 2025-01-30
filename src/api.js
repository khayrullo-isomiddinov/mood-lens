import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const signup = async (userData) => {
  try {
    const response = await API.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Signup failed";
  }
};

export const login = async (userData) => {
  try {
    const response = await API.post("/auth/login", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};
