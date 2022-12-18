import React, {useEffect, useState} from "react"
import {Box, Tab, Tabs, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {Videos} from "./index";
import {getLikedVideos, getMyVideos} from "../api/user/Video";

export default function Storage() {

    function TabPanel(props) {
        const {children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{p: 3}}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    const [value, setValue] = useState(0);
    const [video, setVideo] = useState([])
    const [loading, setLoading] =useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setLoading(false)
    };

    useEffect(() => {
        if (value === 0)
            getMyVideos()
                .then(r => {
                    setVideo(r.data.videos)
                    setLoading(true)
                })
        else
            getLikedVideos()
                .then(r => {
                    setVideo(r.data.videos)
                    setLoading(true)
                })
    }, [value])

    function dynamicProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (<Box sx={{
        color: '#CDCDCD'
    }}
                 flexDirection='column'
    >
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="My Video" {...dynamicProps(0)} />
                    <Tab label="Liked Video" {...dynamicProps(1)} />
                </Tabs>
                {loading && (
                    <>
                        <TabPanel value={value} index={0}>
                            {video.length === 0 ? (
                                <Typography variant='h6'>
                                    You don't have any {value === 1 ? 'liked ' : ''}video
                                </Typography>) : <Videos videos={video} my={true}/>}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {video.length === 0 ? (
                                <Typography variant='h6'>
                                    You don't have any {value === 1 ? 'liked ' : ''}video
                                </Typography>) : <Videos videos={video} liked={true}/>}
                        </TabPanel>
                    </>
                )}

            </Box>
    </Box>)

}