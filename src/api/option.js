import axios from "axios";

//Authorized

export const Authorization = axios.create({
    baseURL: '/api/v1/auth',
    params: {

    }
});

//Video

export const VideoConfig = axios.create({
    baseURL: '/api/v1/videos',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('PiviUser') !== null ? JSON.parse(localStorage.getItem('PiviUser')).access : ''}`
    }
})

export const PUBLIC_VIDEO = axios.create({
    baseURL: '/api/v1/videos'
})

//ADMIN
export const ADMIN = axios.create({
    baseURL: '/api/v1/admin',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('PiviUser') !== null ? JSON.parse(localStorage.getItem('PiviUser')).access : ''}`
    }
})