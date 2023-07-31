import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_HOST_IP_ADDRESS,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
