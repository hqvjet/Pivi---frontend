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

export default function User({ users, isLoading, setLoading }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "Name", width: 130, editable: true },
    { field: "email", headerName: "Email", width: 200, editable: true },
    { field: "role", headerName: "Role", width: 130, editable: true },
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
                const res = updateUser(params.row.id, {
                    username: params.row.username,
                    email: params.row.email,
                    role: params.row.role
                })
                if(res.status === 200) {
                    alert('Update success')
                    setLoading(true);
                }
                    
                }
            }
          >
            Edit
          </Button>
          <Button variant="contained" color="primary" onClick={()=>{
              const res = deleteUser(params.row.id)
              if(res.status === 200) {
                  alert('Delete success')
                  setLoading(true);
              }
          }}>
            Delete
          </Button>
        </>
      ),
    },
  ];
    console.log(users)
  const rows = [
    { id: 1, username: "Jon", email: "Jon@email.com", role: "Admin" },
    { id: 2, username: "Jack", email: "Jack@gmail.com", role: "User" },
    { id: 3, username: "Jill", email: "Jill@gmail.com", role: "User" },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}

