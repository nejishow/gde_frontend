import axios from "axios";
const budget = axios.create({
 // baseURL: "", // 

  baseURL: "http://localhost:3000", // 
});
budget.interceptors.request.use((config) => {
  config.headers.common.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});
export default {

  getAllBudgets() {
    return budget.get("/budgets");
},
  getBudget(id) {
    return budget.get("/budget/" +id);
  },
  postBudget() {
    return budget.post("/budget");
  },

};
