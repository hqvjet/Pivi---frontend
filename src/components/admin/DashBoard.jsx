import {Box, Stack, Typography} from "@mui/material";
import SideBar from "./SideBar";
import {adminCategories} from "../../utils/constants";
import {useState} from "react";
import React from "react";

export default function DashBoard() {

    const [selectedCategories, setSelectedCategories] = useState(adminCategories[0].name)

    return (
        <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
            <Box sx={{height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2}}}>
                <SideBar categories={adminCategories}
                         selectedCategory={selectedCategories}
                         setSelectedCategory={setSelectedCategories}
                />
            </Box>
            <Box>

                <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
                    <Typography variant="h6" fontWeight="bold" mb={2} sx={{color: "white"}}>
                        Hi, Welcome back
                    </Typography>

                </Box>
            </Box>
        </Stack>
    )

}