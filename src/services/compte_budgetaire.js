import axios from "axios";
const compte = axios.create({
 // baseURL: "", // 

  baseURL: "http://localhost:3000", // 
});
compte.interceptors.request.use((config) => {
  config.headers.common.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});
export default {

  getAllComptes() {
    return compte.get("/compteBs");
},
  getCompte(id) {
    return compte.get("/compteB/" +id);
  },
  postcompte() {
    return compte.post("/compteB");
  },

};
