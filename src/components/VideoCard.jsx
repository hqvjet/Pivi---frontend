import React from 'react'
import {Link} from "react-router-dom";
import {Typography, Card, CardContent, CardMedia} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = props => (
    <Card sx={{
        width: {xs: '100%', sm: '358px', md: "320px",},
        boxShadow: "none",
        borderRadius: '10px',
        backgroundColor: 'transparent'
    }}>
        <Link to={props.video.id ? `/video/${props.video.id}` : `/video/cV2gBU6hKfY`}>
            <CardMedia image={`http://localhost:8070/api/v1/videos/get-thumbnail/${props.video.id}`} alt={props.video?.title}
                       sx={{width: {xs: '100%', sm: '358px'}, height: 180, borderRadius: '10px'}}
            />
        </Link>
        <CardContent sx={{backgroundColor: "transparent", height: '106px', borderRadius: '10px'}}>
            <Link to={`/video/${props.video.id}`}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {props.video?.title.slice(0, 60)}
                </Typography>
            </Link>
            <Typography variant="subtitle2" color="gray">
                {props.video?.owner}
                <CheckCircleIcon sx={{fontSize: "12px", color: "gray", ml: "5px"}}/>
            </Typography>
        </CardContent>
    </Card>
);

export default VideoCard