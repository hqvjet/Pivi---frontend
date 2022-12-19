import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {Typography, Box, Stack, Snackbar, IconButton, Backdrop, Button} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import UpdateIcon from '@mui/icons-material/Update';

import {Videos, Loader} from "./index";
import {Fragment} from "react";
import CloseIcon from "@mui/icons-material/Close";
import ChatField from "./ChatField";
import {getAllVideo, getVideoInformation} from "../api/public/Video";
import {deleteVideo, likeVideo, updateVideo} from "../api/user/Video";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const [open, setOpen] = useState(false)
    const [alert, setAlert] = useState('')
    const [heartColor, setHeartColor] = useState('white')
    const [comment, setComment] = useState([])
    const {id} = useParams();
    const [openBackdrop, setOpenBackdrop] = useState(false)
    const [openBackdrop2, setOpenBackdrop2] = useState(false)
    const user = JSON.parse(localStorage.getItem('PiviUser'))

    useEffect(() => {
        getVideoInformation(id)
            .then(r => {
                setComment(r.data.comment)
                r.data.comment = r.data.comment.length
                setVideoDetail(r.data)
            })
        getAllVideo()
            .then(r => setVideos(r.data.data))
    }, [id]);

    if (!videoDetail) return <Loader/>;

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
        likeVideo(id)
            .then(r => {
                setAlert(r.data.message)
                setOpen(true)
            })
            .catch(err => {
                if(!user)
                    window.location.href='/sign-in'
                else {
                    setAlert(err.response.data.message)
                    setOpen(true)
                }
            })
    }

    const deleteVid = () => {
        deleteVideo(id)
            .then(r => {
                setAlert(r.data.message)
                setOpen(true)
                setTimeout(() => {
                    window.location.reload()
                }, 1500)
            })
            .catch(err => {
                setAlert(err.response.data.detail)
                setOpen(true)
            })
    }

    const updateVid = e => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        updateVideo(id, {
            title: data.get('title'),
            description: data.get('description')
        })
            .then(r => {
                setAlert(r.data.message)
                setOpen(true)
                setTimeout(() => {
                    window.location.reload()
                }, 1500)
            })
            .catch(err => {
                setAlert(err.response.data.detail)
                setOpen(true)
            })
    }

    return (
        <Box minHeight="95vh">
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={openBackdrop}
            >
                <Box
                    sx={{
                        width: '500px',
                        height: '130px',
                        backgroundColor: '#1C1C1C',
                        boxShadow: '0 0 20px black',
                        borderRadius: '5px'
                    }}
                >
                    <Typography variant='h6' textAlign='center' marginTop={1}>Are You Sure To Delete This Video
                        ?</Typography>
                    <Typography variant='h6' textAlign='center'>This Video Will Be Removed Permanently</Typography>
                    <Stack direction='row' justifyContent='space-between' sx={{padding: '10px 50px'}}>
                        <Button variant='outlined' onClick={() => setOpenBackdrop(false)}>No</Button>
                        <Button variant='contained' onClick={deleteVid}>Yes</Button>
                    </Stack>
                </Box>
            </Backdrop>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={openBackdrop2}
            >
                <Box
                    sx={{
                        width: '500px',
                        height: '280px',
                        backgroundColor: '#1C1C1C',
                        boxShadow: '0 0 20px black',
                        borderRadius: '5px'
                    }}
                >
                    <Typography variant='h6' textAlign='center' marginTop={1}>Update Video Form</Typography>
                    <Grid
                        component='form'
                        onSubmit={updateVid}
                        noValidate
                        container
                        spacing={3}
                        sx={{color: '#9E9E9E'}}
                        padding={2}
                    >
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="title"
                                name="title"
                                label="Video's Title"
                                fullWidth
                                autoComplete="off"
                                variant="standard"
                                defaultValue={videoDetail?.title}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                fullWidth
                                id="description"
                                label="Video's Description"
                                name='description'
                                multiline
                                maxRows={Infinity}
                                defaultValue={videoDetail?.description}
                            />
                        </Grid>
                        <Grid item xs={12} justifyContent='space-between' display='flex'>
                            <Button variant='outlined' onClick={() => setOpenBackdrop2(false)}>Cancel</Button>
                            <Button variant='contained' type='submit' item>Done</Button>
                        </Grid>
                    </Grid>

                </Box>
            </Backdrop>
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
                            <ReactPlayer
                                className='react-player'
                                controls={true}
                                url={`http://localhost:8070/api/v1/videos/get-video/${id}`}
                                playing={true}
                            />
                            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                                {videoDetail.title}
                            </Typography>
                            <Stack direction="row" justifyContent="space-between" sx={{color: "#fff"}} py={1}
                                   px={2}>
                                <Typography variant={{sm: "subtitle1", md: 'h6'}} color="#fff">
                                    {videoDetail.owner}
                                    <CheckCircleIcon sx={{fontSize: "12px", color: "gray", ml: "5px"}}/>
                                </Typography>
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
                                    {videoDetail?.owner === user?.username && (
                                        <UpdateIcon
                                            sx={{
                                                color: 'white',
                                                '&:hover': {
                                                    cursor: 'pointer'
                                                }
                                            }}
                                            onClick={() => setOpenBackdrop2(true)}
                                        />
                                    )}
                                    {videoDetail?.owner === user?.username && (
                                        <DeleteForeverIcon
                                            sx={{
                                                color: 'red',
                                                '&:hover': {
                                                    cursor: 'pointer'
                                                }
                                            }}
                                            onClick={() => setOpenBackdrop(true)}
                                        />
                                    )}

                                    <Typography variant="body1" sx={{opacity: 0.7}}>
                                        {parseInt(videoDetail.watch).toLocaleString()} views
                                    </Typography>
                                    <Typography variant="body1" sx={{opacity: 0.7}}>
                                        {parseInt(videoDetail.like).toLocaleString()} likes
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box flex={1} marginTop={10}>
                            <ChatField comments={comment} setAlert={setAlert} setOpen={setOpen}/>
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
