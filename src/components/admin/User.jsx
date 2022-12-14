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

    const [rows, setRows] = useState([
        {
            "report_id": "1",
            "status": "pending",
            "accuser": "user1",
            "accused": "user2",
            "date": "1/1/1",
            "reason": "report user là report vì cmt, luôn luôn",
            "cmt": "do thang nao report tao"
        }, {
            "report_id": "1",
            "status": "pending",
            "accuser": "user1",
            "accused": "user2",
            "date": "1/1/1",
            "reason": "report user là report vì cmt, luôn luôn",
            "cmt": "do thang nao report tao"
        }, {
            "report_id": "1",
            "status": "pending",
            "accuser": "user1",
            "accused": "user2",
            "date": "1/1/1",
            "reason": "report user là report vì cmt, luôn luôn",
            "cmt": "do thang nao report tao"
        }, {
            "report_id": "1",
            "status": "pending",
            "accuser": "user1",
            "accused": "user2",
            "date": "1/1/1",
            "reason": "report user là report vì cmt, luôn luôndo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report tao",
            "cmt": "do thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report tao"
        }, {
            "report_id": "1",
            "status": "pending",
            "accuser": "user1",
            "accused": "user2",
            "date": "1/1/1",
            "reason": "report user là report vì cmt, luôn luôn",
            "cmt": "do thang nao report tao"
        },
    ])
    const [open ,setOpen] = useState(false)

    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <TableContainer component={Paper}>
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
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Report Id</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="right">Accuser</TableCell>
                        <TableCell align="right">Accused</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="center">Reason</TableCell>
                        <TableCell align="right">Comment Id</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, idx) => (
                        <TableRow
                            key={idx}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.report_id}
                            </TableCell>
                            <TableCell align="right">
                                <Button
                                    variant="contained"
                                    onClick={handleClose}
                                >
                                    {row.status}
                                </Button>
                            </TableCell>
                            <TableCell align="right">{row.accuser}</TableCell>
                            <TableCell align="right">{row.accused}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="center">{row.reason}</TableCell>
                            <TableCell align="right">{row.cmt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}