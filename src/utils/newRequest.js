import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://server-a8yi.onrender.com/api/v1/",
  withCredentials: true,
});

export default newRequest;