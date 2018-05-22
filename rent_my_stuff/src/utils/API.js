import axios from "axios";

export default {
  findAllCategories: () => {
    return axios.get("/testingRoutes/category");
  },

  getStuff: () => {
    return axios.get("/testingRoutes");
  },

  getOneItem: id => {
    return axios.get(`/testingRoutes/oneitem/${id}`);
  },
  destroyOneItem: id => {
    return axios.delete(`testingRoutes/myitems/id/${id}`);
  },
  updateOneItem: body => {
    return axios.put(`testingRoutes/myitems/id/${body.id}`, body);
  },
  signUp: newUser => {
    return axios.post("/auth/signup", newUser);
  },
  getCurrentUser: function () {
    return axios.get("/auth/getUser");
  },

  login: user => {

    return axios.post("/auth/login", user);
  },

  logout: () => {
    return axios.get("/auth/logout");
  },

  addItem: item => {
    console.log(" api. additem ", item);
    return axios.post("/testingRoutes/additem", item);
  },

  getAllUsers: () => {
    return axios.get("/testingRoutes/users");
  },

  getAllByUser: id => {
    return axios.get("/testingRoutes/myitems");
  }
};
