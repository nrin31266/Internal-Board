// src/api/axiosInstance.ts

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_GATEWAY_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000, // default timeout 10s
});

export default axiosInstance;
