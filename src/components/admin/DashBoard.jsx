import {Box, Stack, Typography} from "@mui/material";
import SideBar from "./SideBar";
import {adminCategories} from "../../utils/constants";
import {useState} from "react";
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Chart from "./Chart";
import PieChart from "./PieChart";

export default function DashBoard() {

    const [selectedCategories, setSelectedCategories] = useState(adminCategories[0].name)

    const statisticStyles = {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        border: '1px solid red',
        padding: '50px 70px',
        borderRadius: '10px',
        marginLeft: '40px'
    }

    return (
        <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
            <Box sx={{height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2}}}>
                <SideBar categories={adminCategories}
                         selectedCategory={selectedCategories}
                         setSelectedCategory={setSelectedCategories}
                />
            </Box>
            <Box>

                <Box p={2} sx={{overflowY: "auto", flex: 2}}>
                    <Typography variant="h6" fontWeight="bold" mb={2} sx={{color: "white"}}>
                        Hi, Welcome back
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Box sx={statisticStyles}>
                            <AccountCircleIcon color='primary' fontSize='large' sx={{
                                textAlign: 'center'
                            }}/>

                            <Typography fontWeight='bold' color='primary' textAlign='center' marginTop={8}>
                                {2000}
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
                                {2000}
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
                                {2000}
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
                                {2000}
                            </Typography>

                            <Typography color='primary' textAlign='center'>
                                User count
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Stack direction='row' p={2}>
                    <Box>
                        <Typography p={2} variant="h6" fontWeight="bold" mb={2} sx={{color: "white"}}>
                            Weekly
                        </Typography>
                        <Chart/>
                    </Box>
                    <Box>
                        <Typography p={2} variant="h6" fontWeight="bold" mb={2} sx={{color: "white"}}>
                            Currently
                        </Typography>
                        <PieChart/>
                    </Box>
                </Stack>

            </Box>
        </Stack>
    )

}