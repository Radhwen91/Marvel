import axios from "axios";
 const api = axios.create({
  baseURL: "https://gateway.marvel.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
 export default api