import {Box, IconButton, Snackbar, Stack, Typography} from "@mui/material";
import {useEffect, useLayoutEffect, useState} from "react";
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PieChart from "./PieChart";
import User from "./User";
import {getAllUser} from "../../api/admin/user";
import {getAllVideo} from "../../api/public/Video";
import {Fragment} from "react";
import CloseIcon from "@mui/icons-material/Close";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function DashBoard() {
    const [isLoading, setLoading] = useState(false);

    const statisticStyles = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid gray',
        boxShadow: '0 0 10px white',
        padding: '50px 70px',
        borderRadius: '10px',
    }
    const [users,setUsers] = useState([])
    const [videos, setVideos] = useState([])
    const [sumOfWatchs, setSumOfWatchs] = useState(0)
    const [interact, setInteract] = useState({like: 0, dislike: 0})
    const [open, setOpen] = useState(false)
    const [alert, setAlert] = useState('')

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

    useLayoutEffect(() => {
        if(JSON.parse(localStorage.getItem('PiviUser'))?.role !== 'admin')
            window.location.href='/'
    }, [])

    useEffect(() => {
        getAllUser()
            .then(r => {
                setUsers(r.data.users)
            })
        getAllVideo()
            .then(r => {
                setVideos(r.data.data)
                let sum = 0, like = 0, dislike = 0
                for(let i = 0; i < r.data.data.length; ++i) {
                    sum += r.data.data[i].watch
                    like += r.data.data[i].like
                    dislike += r.data.data[i]?.dislike
                }
                setSumOfWatchs(sum)
                setInteract({like, dislike})
            })
    }, [isLoading])

    return (
        <Stack sx={{flexDirection: {xs: "column", md: "row"}}}>
            <Box>
                <Snackbar
                    open={open}
                    autoHideDuration={5000}
                    message={alert}
                    onClose={() => setOpen(false)}
                    action={action}
                />
                <Box p={2} sx={{flex: 2}}>
                    <Typography variant="h6" fontWeight="bold" mb={2} sx={{color: "white"}}>
                        Hi, Welcome back
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }} width='97vw'>
                        <Box sx={statisticStyles}>
                            <AccountCircleIcon color='primary' fontSize='large' sx={{
                                textAlign: 'center',
                                fontSize: '4em'
                            }}/>

                            <Typography fontWeight='bold' color='primary' textAlign='center' marginTop={8}>
                                {users?.length}
                            </Typography>

                            <Typography color='primary' textAlign='center'>
                                User count
                            </Typography>

                        </Box>

                        <Box sx={statisticStyles}>
                            <VideoLibraryIcon color='primary' fontSize='large' sx={{
                                textAlign: 'center',
                                fontSize: '4em'
                            }}/>

                            <Typography fontWeight='bold' color='primary' textAlign='center' marginTop={8}>
                                {videos?.length}
                            </Typography>

                            <Typography color='primary' textAlign='center'>
                                Video count
                            </Typography>
                        </Box>

                        <Box sx={statisticStyles}>
                            <VisibilityIcon color='primary' fontSize='large' sx={{
                                textAlign: 'center',
                                fontSize: '4em'
                            }}/>

                            <Typography fontWeight='bold' color='primary' textAlign='center' marginTop={8}>
                                {sumOfWatchs}
                            </Typography>

                            <Typography color='primary' textAlign='center'>
                                Total view
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Stack direction='row' justifyContent='center'>
                    <Box>
                        <Typography p={2} variant="h6" fontWeight="bold" mb={2} sx={{color: "white"}} textAlign='center'>
                            Pie Chart
                        </Typography>
                        <PieChart interact={interact}/>
                    </Box>
                </Stack>
                <Box p={2} sx={{flex: 2}}>
                    <Typography p={2} variant="h6" fontWeight="bold" mb={2} sx={{color: "white"}}>
                        Users
                    </Typography>
                    <User users={users} isLoading={isLoading} setLoading={setLoading} alert={setAlert} open={setOpen}/>
                </Box>

            </Box>
        </Stack>
    )

}
