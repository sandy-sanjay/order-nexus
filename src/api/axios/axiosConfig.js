import axios from "axios";

// Use REACT_APP_API_URL if provided (for production), otherwise default to relative requests
const baseURL = process.env.REACT_APP_API_URL || "";

const axiosConfig = axios.create({
  baseURL,
});

export default axiosConfig;
