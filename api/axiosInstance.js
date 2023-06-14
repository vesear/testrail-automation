import axios from "axios";
import { CONFIG } from "../config.js";

export const axiosInstance = axios.create({
  baseURL: "https://avesear.testrail.io/",
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: CONFIG.USER.USERNAME,
    password: CONFIG.USER.PASSWORD,
  },
});
