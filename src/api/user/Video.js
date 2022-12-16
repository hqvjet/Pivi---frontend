import {VideoConfig} from "../option";

export const uploadVideo = async data => {
    return await VideoConfig.post('/upload', data)
}