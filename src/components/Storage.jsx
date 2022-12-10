import React, {useState} from "react"
import {Box, Stack, Typography} from "@mui/material";

export default function Storage() {
    const [data, setData] = useState([{
        "id": "1",
        "title": "abc",
        "description": "def",
        "liked": "999",
        "watched": "1",
        "owned": "username",
        "created_at": "1/1/1",
        "video_thumbnail": "/resources/images/chill.png",
        "video_direction": "/resources/videos/sasas.mp4"
    },
        {
            "id": "2",
            "title": "abc",
            "description": "def",
            "liked": "999",
            "watched": "1",
            "owned": "username2",
            "created_at": "1/1/1",
            "video_thumbnail": "/resources/images/fdkffsdmf",
            "video_direction": "/resources/videos/fmkmfms.mp4"
        }])

    return (<Box sx={{
        color: '#CDCDCD'
    }}
                 flexDirection='column'
    >
        {data.length === 0 && (<Typography variant='h6'>You don't have any liked video</Typography>)}
        {data.length !== 0 && (
            <Stack>
                {data.map((video, idx) => (
                    <Stack key={idx} flexDirection='row'>
                        <Box
                            component='img'
                            alt='video_thumbnail'
                            src={video.video_thumbnail}
                            width='20%' height='5%'
                        />
                        <Stack flexDirection='column'>
                            {video.title}
                        </Stack>
                    </Stack>))}
            </Stack>)}
    </Box>)

}