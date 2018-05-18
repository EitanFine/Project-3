import axios from "axios";

export default {
   
    getStuff: () => {
        return axios.get("/testingRoutes");
    },

    getOneItem: (id) =>{
        return axios.get(`/testingRoutes/oneitem/${id}`)
    },


    findAllCategories: () => {
        return axios.get("/testingRoutes/category");        
    } ,

    addItem: (id) =>{
        return axios.post("/testingRoutes/additem")
    },

    // getAllUsers: () => {
    //     return axios.get("/testingRoutes/users");
    // }
}