import axios from "axios";
const fournisseur = axios.create({
 // baseURL: "", // 

  baseURL: "http://localhost:3000", // 
});
fournisseur.interceptors.request.use((config) => {
  config.headers.common.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});
export default {

  getAllFournisseurs() {
    return fournisseur.get("/fournisseurs");
},
  getFournisseur(id) {
    return fournisseur.get("/fournisseur/" +id);
  },
  postFournisseur() {
    return fournisseur.post("/fournisseur");
  },

};
