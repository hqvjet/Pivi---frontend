import React, {useEffect, useState} from "react";
import {Box, Stack, Typography} from "@mui/material";

import {Videos, Sidebar} from "./index";
import {categories, videoCat} from "../utils/constants";
import Upload from "./Upload";
import Storage from "./Storage";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);
    const [upload, setUpload] = useState(false);
    const [search, setSearch] = useState(true);
    const [storage, setStorage] = useState(false);

    useEffect(() => {
        setVideos(null);

        if (selectedCategory !== categories[0].name && selectedCategory !== categories[1].name) {
            //fetch video
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

                <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: "#fff",}}>
                    Copyright © 2022 JSM Media
                </Typography>
            </Box>

            {/*<Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>*/}
            {/*    <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>*/}
            {/*        {selectedCategory} <span style={{color: "#FC1503"}}>videos</span>*/}
            {/*    </Typography>*/}
            {/*    {search && (*/}
            {/*        <Videos videos={videos}/>*/}
            {/*    )}*/}
            {/*    {upload && (*/}
            {/*        <Upload/>*/}
            {/*    )}*/}
            {/*    {storage && (*/}
            {/*        <Storage/>*/}
            {/*    )}*/}
            {/*</Box>*/}
        </Stack>
    );
};

export default Feed;
