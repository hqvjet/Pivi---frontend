import axios from "axios";

//Youtube

const REACT_APP_YOUTUBE_API_KEY = 'AIzaSyBQIxJO49_Cvyek5k5vCDJ04nCSkGHNQy8';
const REACT_APP_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const Video = axios.create({
    baseURL: REACT_APP_BASE_URL,
    params: {
        part: "snippet",
        key: REACT_APP_YOUTUBE_API_KEY,
        maxResults: 5
    },
});

export const Channel = axios.create({
    baseURL: REACT_APP_BASE_URL,
    params: {
        part: 'snippet',
        key: REACT_APP_YOUTUBE_API_KEY
    }
})

export const StatisticVideo = axios.create({
    baseURL: REACT_APP_BASE_URL,
    params: {
        part: "statistics, snippet",
        key: REACT_APP_YOUTUBE_API_KEY,
    },
});

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