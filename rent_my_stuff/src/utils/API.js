import axios from "axios";

export default {
    getStuff: () => {
        return axios.get("/testingRoutes");
    },

    getOneItem: (id) =>{
        return axios.get(`/testingRoutes/oneitem/${id}`)
    },

    getAllUsers: () => {
        return axios.get("/testingRoutes/users");
    }
}