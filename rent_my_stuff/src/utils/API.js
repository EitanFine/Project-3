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
    },

    getCurrentUser: () => {
            return axios.get("/testingRoutes/getUser")
    },
    
    signUp: (newUser) => {
        return axios.post("/testingRoutes/signup", newUser)
    },

    login: (user) => {
        return axios.post("/testingRoutes/login", user)
    },

    logout: () => {
        return axios.get("/testingRoutes/logout")
    }
}