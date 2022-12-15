import {VideoConfig} from "../option";

export const uploadVideo = async data => {
    return await VideoConfig.post('/create-video', data)
}