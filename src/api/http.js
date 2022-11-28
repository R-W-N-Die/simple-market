import axios from "axios";
import router from "@/router";

const baseURL = 'http://localhost:8000/';
const http = axios.create({
    baseURL,
    timeout: 10000,
    withCredentials: true
})

http.interceptors.request.use(function(request) {
    const token = localStorage.getItem('token');

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
})

http.interceptors.response.use(r => r, error => {
    if (error.response.status === 401) {
        localStorage.clear()
        router.push({ name: 'Login' })
    }

    const message = error.response?.data?.message;
    if (message) alert(message)

    return error
})

export default http;
