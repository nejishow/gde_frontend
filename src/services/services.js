import axios from "axios";
const service = axios.create({
 // baseURL: "", // 

  baseURL: "http://localhost:3000", // 
});
service.interceptors.request.use((config) => {
  config.headers.common.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});
export default {

  getAllServices() {
    return service.get("/services");
},
  getService(id) {
    return service.get("/service/" +id);
  },
  postService() {
    return service.post("/service");
  },

};
