import {VideoConfig} from "../option";

export const uploadVideo = async data => {
    return await VideoConfig.post('/upload', data)
}

export const likeVideo = async id => {
    return await VideoConfig.post(`/like/${id}`)
}

export const commentOnVideo = async data => {
    return await VideoConfig.post('/comment', data)
}

export const getMyVideos = async () => {
    return await VideoConfig.get('/my-videos')
}

export const getLikedVideos = async () => {
    return await VideoConfig.get('/liked')
}