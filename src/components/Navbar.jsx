import {Button, Stack} from "@mui/material";
import {Link} from "react-router-dom";

import {logo} from "../utils/constants";
import {SearchBar} from "./index";
import React, {useEffect, useState} from "react";
import UserBar from "./UserBar";

const Navbar = () => {

    return (
        <Stack direction="row" alignItems="center" p={2}
               sx={{
                   position: 'sticky', background: 'rgba(0, 0, 0, 0.9)', top: 0, justifyContent: "space-between",
                   borderStyle: 'none none solid none', borderColor: 'gray', height: '40px', zIndex: 10
               }}>
            <Link to="/" style={{display: "flex", alignItems: "center"}}>
                <img src={logo} alt="logo" height={45}/>
            </Link>
            {JSON.parse(localStorage.getItem('PiviUser'))?.role !== 'admin' && (
                <SearchBar/>
            )}
            <UserBar/>
        </Stack>
    );
}
export default Navbar;
