import {Box, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PieChart from "./PieChart";
import {getAllUser} from "../../api/admin/user";
import {getAllVideo} from "../../api/public/Video";
import User from "./User";

export default function DashBoard() {

    const statisticStyles = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid red',
        padding: '50px 70px',
        borderRadius: '10px',
    }
    const [users,setUsers] = useState([])
    const [videos, setVideos] = useState([])
    const [sumOfWatchs, setSumOfWatchs] = useState(0)
    const [interact, setInteract] = useState({like: 0, dislike: 0})

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
    }, [])

    return (
        <Stack sx={{flexDirection: {xs: "column", md: "row"}}}>
            <Box>

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
                                textAlign: 'center'
                            }}/>

                            <Typography fontWeight='bold' color='primary' textAlign='center' marginTop={8}>
                                {users?.length}
                            </Typography>

                            <Typography color='primary' textAlign='center'>
                                User count
                            </Typography>

                        </Box>

                        <Box sx={statisticStyles}>
                            <AccountCircleIcon color='primary' fontSize='large' sx={{
                                textAlign: 'center'
                            }}/>

                            <Typography fontWeight='bold' color='primary' textAlign='center' marginTop={8}>
                                {videos?.length}
                            </Typography>

                            <Typography color='primary' textAlign='center'>
                                Video count
                            </Typography>
                        </Box>

                        <Box sx={statisticStyles}>
                            <AccountCircleIcon color='primary' fontSize='large' sx={{
                                textAlign: 'center'
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
                <Box>
                    <User/>
                </Box>

            </Box>
        </Stack>
    )

}