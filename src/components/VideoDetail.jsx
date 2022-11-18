import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {Typography, Box, Stack, Snackbar, IconButton} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from '@mui/icons-material/Favorite';

import {Videos, Loader} from "./index";
import {getRelatedVideo, getVideoDetails} from "../api/Youtube";
import {Fragment} from "react";
import CloseIcon from "@mui/icons-material/Close";
import ChatField from "./ChatField";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const [open, setOpen] = useState(false)
    const [alert, setAlert] = useState('')
    const [heartColor, setHeartColor] = useState('white')
    const {id} = useParams();

    useEffect(() => {
        getVideoDetails(id)
            .then((data) => setVideoDetail(data[0]))

        getRelatedVideo(id)
            .then((data) => setVideos(data))
    }, [id]);

    if (!videoDetail?.snippet) return <Loader/>;

    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => setOpen(false)}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </Fragment>
    )

    const like = () => {

        // .catch(() => console.log('err'))
    }

    const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail;

    return (
        <Box minHeight="95vh">
            <Stack direction={{xs: "column", md: "row"}}>
                <Stack direction='column' flex={1}>
                    <Box flex={1}>
                        <Box sx={{
                            width: "100%",
                            top: "86px",
                            borderStyle: 'none none solid none',
                            borderColor: 'white'
                        }}>
                            <Snackbar
                                open={open}
                                autoHideDuration={5000}
                                message={alert}
                                onClose={() => setOpen(false)}
                                action={action}
                            />
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls
                                         playing={true}/>
                            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                                {title}
                            </Typography>
                            <Stack direction="row" justifyContent="space-between" sx={{color: "#fff"}} py={1} px={2}>
                                <Link to={`/channel/${channelId}`}>
                                    <Typography variant={{sm: "subtitle1", md: 'h6'}} color="#fff">
                                        {channelTitle}
                                        <CheckCircleIcon sx={{fontSize: "12px", color: "gray", ml: "5px"}}/>
                                    </Typography>
                                </Link>
                                <Stack direction="row" gap="20px" alignItems="center">
                                    <FavoriteIcon
                                        sx={{
                                            color: heartColor,
                                            '&:hover': {
                                                cursor: 'pointer'
                                            }
                                        }}
                                        onClick={like}
                                    />
                                    <Typography variant="body1" sx={{opacity: 0.7}}>
                                        {parseInt(viewCount).toLocaleString()} views
                                    </Typography>
                                    <Typography variant="body1" sx={{opacity: 0.7}}>
                                        {parseInt(likeCount).toLocaleString()} likes
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box flex={1} marginTop={10}>
                            <ChatField comments={3}/>
                        </Box>
                    </Box>
                </Stack>
                <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
                    <Videos videos={videos} direction="column"/>
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail;
