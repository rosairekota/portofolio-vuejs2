import axios from "axios";

export const fetchAPI = axios.create({
  baseURL: "https://api.transacmoney.com/api",
});
