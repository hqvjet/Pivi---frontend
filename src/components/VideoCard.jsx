import React from 'react'
import {Link} from "react-router-dom";
import {Typography, Card, CardContent, CardMedia, Stack} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {convertDateToDay} from "../utils/Algorithm";

const VideoCard = props => (
    <Card sx={{
        width: {xs: '100%', sm: '358px', md: "320px",},
        boxShadow: "none",
        borderRadius: '10px',
        backgroundColor: 'transparent'
    }}>
        <Link to={props.video.id ? `/video/${props.video.id}` : `/video/cV2gBU6hKfY`}>
            <CardMedia image={`http://localhost:8070/api/v1/videos/get-thumbnail/${props.video.id}`}
                       alt={props.video?.title}
                       sx={{width: {xs: '100%', sm: '358px'}, height: 180, borderRadius: '10px'}}
            />
        </Link>
        <CardContent sx={{backgroundColor: "transparent", height: '106px', borderRadius: '10px'}}>
            <Stack direction='row' gap={2} alignItems='center'>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {props.video?.title.slice(0, 60)}
                </Typography>
                <Typography variant="subtitle2" color="gray">
                    {props.video?.owner}
                    <CheckCircleIcon sx={{fontSize: "12px", color: "gray", ml: "5px"}}/>
                </Typography>
            </Stack>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                {props.my && (
                    <Typography variant="subtitle2" color="gray">
                        {`${props.video?.watched} view${props.video?.watched > 1 ? 's' : ''}`}
                    </Typography>
                )}
                {!props.my && (
                    <Typography variant="subtitle2" color="gray">
                        {`${props.video?.watch} view${props.video?.watch > 1 ? 's' : ''}`}
                    </Typography>
                )}

                {props.liked && (
                    <Typography variant="subtitle2" color="gray">
                        {`${props.video?.likes} like${props.video?.likes > 1 ? 's' : ''}`}
                    </Typography>
                )}
                {!props.liked && (

                    <Typography variant="subtitle2" color="gray">
                        {`${props.video?.like} like${props.video?.like > 1 ? 's' : ''}`}
                    </Typography>
                )}
                {props.liked && (
                    <Typography variant="subtitle2" color="gray">
                        {`${props.video?.comments} comment${props.video?.comments > 1 ? 's' : ''}`}
                    </Typography>
                )}

                {!props.liked && (
                    <>
                        {props.my && (
                            <Typography variant="subtitle2" color="gray">
                                {`${props.video?.comments} comment${props.video?.comments > 1 ? 's' : ''}`}
                            </Typography>
                        )}

                        {!props.my && (
                            <Typography variant="subtitle2" color="gray">
                                {`${props.video?.comment} comment${props.video?.comment > 1 ? 's' : ''}`}
                            </Typography>
                        )}
                    </>

                )}

                {!props.liked && (
                    <Typography variant="subtitle2" color="gray">
                        {convertDateToDay(props.video?.create_at)}
                    </Typography>
                )}

            </Stack>
            <Stack marginTop={2}>
                <Typography variant="subtitle2" color="gray">
                    {`Content: ${props.video?.description}`}
                </Typography>
            </Stack>
        </CardContent>
    </Card>
);

export default VideoCard