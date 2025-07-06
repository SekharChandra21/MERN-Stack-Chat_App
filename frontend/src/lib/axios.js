import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "http://localhost:3000/api",
    withCredentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",},
})  