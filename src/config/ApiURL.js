import axios from "axios";

export const fetchAPI = axios.create({
  baseURL: "http://localhost:4500/api",
});
 