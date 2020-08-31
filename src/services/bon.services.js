import axios from "axios";
const bon = axios.create({
 // baseURL: "", // 

  baseURL: "http://localhost:3000", // 
});
bon.interceptors.request.use((config) => {
  config.headers.common.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});
export default {

  getBons(date) {
        return bon.get("/bons/"+ date);
  },
  getBon(id) {
    return bon.get("/bon/" +id);
  },
  postBon() {
    return bon.post("/bon");
  },

};
