import React, {useEffect, useLayoutEffect, useState} from "react";
import {Box, Stack, Typography} from "@mui/material";

import {Videos, Sidebar} from "./index";
import {categories, videoCat} from "../utils/constants";
import Upload from "./Upload";
import Storage from "./Storage";
import {getAllVideo} from "../api/public/Video";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('Videos');
    const [videos, setVideos] = useState(null);
    const [upload, setUpload] = useState(false);
    const [search, setSearch] = useState(true);
    const [storage, setStorage] = useState(false);

    useLayoutEffect(() => {
        if(JSON.parse(localStorage.getItem('PiviUser'))?.role === 'admin')
            window.location.href = '/1423asqwf3'
    }, [])

    useEffect(() => {
        setVideos(null);

        if (selectedCategory === categories[2].name) {
            getAllVideo()
                .then(r => {
                    setVideos(r.data.data)
                    setSearch(true)
                    setUpload(false)
                    setStorage(false)
                })
        }

        else if(selectedCategory === categories[0].name) {
            setUpload(true)
            setSearch(false)
            setStorage(false)
        }

        else if(selectedCategory === categories[1].name) {
            setStorage(true)
            setUpload(false)
            setSearch(false)
        }

    }, [selectedCategory]);

    return (
        <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>

            <Box sx={{height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2}}}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </Box>

            <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
                    {selectedCategory}
                </Typography>
                {search && (
                    <Videos videos={videos}/>
                )}
                {upload && (
                    <Upload/>
                )}
                {storage && (
                    <Storage/>
                )}
            </Box>
        </Stack>
    );
};

export default Feed;
