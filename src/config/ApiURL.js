import axios from "axios";

export const fetchAPI = axios.create({
  url: "http://localhost:4500/api",
});
