import {
    Backdrop, Box,
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function User() {
    const [open ,setOpen] = useState(false)

    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <Box
                    sx={{
                        width: {xs: '500px', md: '800px'},
                        height: '300px',
                        backgroundColor: '#1C1C1C',
                        boxShadow: '0 0 20px black',
                        borderRadius: '5px'
                    }}
                >
                    <Stack flexDirection='column'>
                        <Typography
                            variant='h4'
                            sx={{padding: '10px'}}
                        >
                            Confirm Action
                        </Typography>
                        <Typography
                            variant='caption'
                            sx={{padding: '10px'}}
                        >
                            By Click 'Accept', You Have Agreed With Our Terms And Conditions
                        </Typography>
                    </Stack>
                </Box>
            </Backdrop>
        </>
    )

}