import axios from "axios";

export default {
  getStuff: () => {
    return axios.get("/testingRoutes");
  },

  getOneItem: id => {
    return axios.get(`/testingRoutes/oneitem/${id}`);
  },
  signUp: newUser => {
    return axios.post("/auth/signup", newUser);
  },
  getCurrentUser: function() {
    return axios.get("/auth/getUser");
  },

  login: user => {
    return axios.post("/auth/login", user);
  },

  logout: () => {
    return axios.get("/auth/logout");
  },

  findAllCategories: () => {
    return axios.get("/testingRoutes/category");
  },

  addItem: id => {
    return axios.post("/testingRoutes/additem");
  },

  getAllByUser: id => {
    return axios.get("/testingRoutes/myitems");
  }

  // getAllUsers: () => {
  //     return axios.get("/testingRoutes/users");
  // }
};
