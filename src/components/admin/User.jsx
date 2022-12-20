import {
  Backdrop,
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { updateUser, deleteUser } from "../../api/admin/user";

export default function User(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 350 },
    { field: "username", headerName: "Name", width: 200, editable: true },
    { field: "email", headerName: "Email", width: 300, editable: true },
    { field: "role", headerName: "Role", width: 200, editable: true },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
            onClick={() => {
                updateUser(params.row.id, {
                    username: params.row.username,
                    email: params.row.email,
                    role: params.row.role
                })
                    .then(r => {
                        props.alert('Update success')
                        props.setLoading(true);
                        props.open(true)
                    })
                    .catch(err => {
                        props.alert(err.response.error)
                        props.open(true)
                    })
                    
                }
            }
          >
            Edit
          </Button>
          <Button variant="contained" color="primary" onClick={()=>{
              const res = deleteUser(params.row.id)
              if(res.status === 200) {
                  alert('Delete success')
                  props.setLoading(true);
              }
          }}>
            Delete
          </Button>
        </>
      ),
    },
  ];
  const rows = [
    { id: 1, username: "Jon", email: "Jon@email.com", role: "Admin" },
    { id: 2, username: "Jack", email: "Jack@gmail.com", role: "User" },
    { id: 3, username: "Jill", email: "Jill@gmail.com", role: "User" },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}

