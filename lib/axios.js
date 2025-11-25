import axios from "axios";

const axiosInstance = axios.create({
 baseURL: typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
 timeout: 30000, // 30 saniye
 headers: {
  "Content-Type": "application/json",
 },
});

axiosInstance.interceptors.request.use(
 (config) => {
  return config;
 },
 (error) => {
  return Promise.reject(error);
 }
);

axiosInstance.interceptors.response.use(
 (response) => {
  return response;
 },
 (error) => {
  if (error.response) {
   console.error("API Error:", error.response.status, error.response.data);
  } else if (error.request) {
   console.error("Network Error:", error.message);
  } else {
   console.error("Request Error:", error.message);
  }
  return Promise.reject(error);
 }
);

export default axiosInstance;

