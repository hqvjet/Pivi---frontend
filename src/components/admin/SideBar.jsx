import {Stack} from "@mui/material";
import React from "react";

export default function SideBar(props) {

    function menu(cat) {
        return () => {
            props.setSelectedCategory(cat)
            console.log(cat)
            if (cat === props.categories[0].name)
                window.location.href = '1423asqwf3'
            else if (cat === props.categories[1].name)
                window.location.href = '1423asqwf3/user'
            else
                window.location.href = '1423asqwf3/video'
        }
    }

    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: {sx: "auto", md: "95%"},
                flexDirection: {md: "column"},
            }}
        >
            {props.categories.map((category, idx) => (
                <button
                    className="category-btn"
                    onClick={menu(category.name)}
                    style={{
                        background: category.name === props.selectedCategory && "#FC1503",
                        color: "white"
                    }}
                    key={idx}
                >
                    <span style={{
                        color: category.name === props.selectedCategory ? "white" : "red",
                        marginRight: "15px"
                    }}>
                        {category.icon}
                    </span>
                    <span style={{opacity: category.name === props.selectedCategory ? "1" : "0.8"}}>
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    )

}