import axios from "axios";

export default {

    findAllCategories: () => {
        return axios.get("/testingRoutes/category");        
    } ,

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
        console.log('New User: ', newUser)
        return axios.post("/auth/signup", newUser)
    },

    login: (user) => {
        return axios.post("/auth/login", user)
    },

    logout: () => {
        return axios.get("/auth/logout")
    }
}