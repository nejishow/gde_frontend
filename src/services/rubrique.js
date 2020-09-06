import axios from "axios";
const rubrique = axios.create({
 // baseURL: "", // 

  baseURL: "http://localhost:3000", // 
});
rubrique.interceptors.request.use((config) => {
  config.headers.common.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});
export default {

  getAllRubriques() {
    return rubrique.get("/rubriques");
},
  getRubrique(id) {
    return rubrique.get("/rubrique/" +id);
  },
  postRubrique() {
    return rubrique.post("/rubrique");
  },

};
