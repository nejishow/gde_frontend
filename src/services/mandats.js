import axios from "axios";
const mandat = axios.create({
 // baseURL: "", // 

  baseURL: "http://localhost:3000", // 
});
mandat.interceptors.request.use((config) => {
  config.headers.common.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});
export default {

  getMandats(date) {
        return mandat.get("/mandats/"+ date);
  },
  getAllMandats() {
    return mandat.get("/mandats");
},
  getMandat(id) {
    return mandat.get("/mandat/" +id);
  },
  postMandat() {
    return mandat.post("/mandat");
  },

};
