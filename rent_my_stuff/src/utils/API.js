import axios from "axios";

export default {

    // findAllCategories: () => {
    //     return axios.get("/testingRoutes/category");        
    // } ,

    getStuff: () => {
        return axios.get("/testingRoutes");
    },

    getOneItem: (id) =>{
        return axios.get(`/testingRoutes/oneitem/${id}`)
    },
    signUp: (newUser) => {
        return axios.post("/auth/signup", newUser)
      },
      getCurrentUser: function(){
        return axios.get("/auth/getUser");
      },
      
      login: (user) => {
        console.log("=========>", user)
        return axios.post("/auth/login", user)
      },
    
      logout: () => {
        return axios.get("/auth/logout");
      }

    // getAllUsers: () => {
    //     return axios.get("/testingRoutes/users");
    // }
}