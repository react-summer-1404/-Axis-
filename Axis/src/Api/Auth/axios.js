
import axios from "axios";

const api = axios.create({
  baseURL: 'https://sepehracademy.liara.run/',
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export default api;
