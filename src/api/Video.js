import {VideoConfig} from "./option";

export const likeVideo = async videoId => {
    return (await VideoConfig.post('/like', {video_id: videoId})).data
}

export const isLiked = async() => {
    return (await VideoConfig.get('')).data
}

export const getLikedVideos = async() => {
    return (await VideoConfig.get('')).data
}


//Check video is liked by this user?
// {
//     video_id: '??'
// }

//get liked videos of this user

//get video comments, likes, ,views
// {
//     video_id: '??'
// }
