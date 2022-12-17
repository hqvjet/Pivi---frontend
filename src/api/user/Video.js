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