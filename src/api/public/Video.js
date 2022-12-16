import {PUBLIC_VIDEO, VideoConfig} from "../option";

export async function getSearchResult(keyword) {
    return PUBLIC_VIDEO.get(`/search?keyword=${keyword}`)
}

export async function getVideoInformation(id) {
    return PUBLIC_VIDEO.get(`/video/${id}`)
}