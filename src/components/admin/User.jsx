import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
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
        },{
            "report_id": "1",
            "status": "pending",
            "accuser": "user1",
            "accused": "user2",
            "date": "1/1/1",
            "reason": "report user là report vì cmt, luôn luôn",
            "cmt": "do thang nao report tao"
        },{
            "report_id": "1",
            "status": "pending",
            "accuser": "user1",
            "accused": "user2",
            "date": "1/1/1",
            "reason": "report user là report vì cmt, luôn luôn",
            "cmt": "do thang nao report tao"
        },{
            "report_id": "1",
            "status": "pending",
            "accuser": "user1",
            "accused": "user2",
            "date": "1/1/1",
            "reason": "report user là report vì cmt, luôn luôndo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report tao",
            "cmt": "do thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report taodo thang nao report tao"
        },{
            "report_id": "1",
            "status": "pending",
            "accuser": "user1",
            "accused": "user2",
            "date": "1/1/1",
            "reason": "report user là report vì cmt, luôn luôn",
            "cmt": "do thang nao report tao"
        },
    ])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Report Id</TableCell>
                        <TableCell align="right">Status</TableCell>
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
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.report_id}
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.accuser}</TableCell>
                            <TableCell align="right">{row.accused}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="center">{row.reason}</TableCell>
                            <TableCell
                                align="right"
                                onClick={() => {}}
                            >
                                <Link
                                    to=''
                                    style={{color: 'white'}}
                                    onClick={() => {}}
                                >
                                    {row.cmt}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}