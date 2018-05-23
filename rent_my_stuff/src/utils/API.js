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

  addComment(comment){
    return axios.post(`/testingRoutes/addComment/id/${comment.commentItemId}`, comment);
  },
  getComments: id =>{
    return axios.get(`/testingRoutes/getComments/id/${id}`)
  },
  addItem: item => {
    return axios.post("/testingRoutes/additem", item);
  },

  getAllUsers: () => {
    return axios.get("/testingRoutes/users");
  },

  getAllByUser: id => {
    return axios.get("/testingRoutes/myitems");
  },

  getRentedDates: id => {
    return axios.get(`/testingRoutes/renteddates/rentid/${id}`);
  },

  addRentedDate: dateitem => {
    return axios.post("/testingRoutes/addrenteddate", dateitem);
  }
};
