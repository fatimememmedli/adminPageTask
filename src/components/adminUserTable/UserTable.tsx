import React, { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./../../redux/store/store.ts";
import { getAllUsers } from "../../redux/slices/AdminUserSlice.ts";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from "@mui/icons-material/Send";
import { deleteUser,sendNot } from "../../redux/slices/AdminUserSlice.ts";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
function UserTable() {
  const datas = useSelector((state: RootState) => state.users.users);
  const [modal, setModal] = useState<string>("");
console.log(modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "username", headerName: "username", width: 150 },
    { field: "surname", headerName: "surname", width: 150 },
    {
      field: "Delete",
      headerName: "Delete",
      flex: 1,
      width: 180,
      renderCell: (e) => (
        <Button
          onClick={() => {
            dispatch(deleteUser(e.row.id));
          }}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
      ),
    },
    {
      field: "notification",
      headerName: "Notification",
      flex: 1,
      width: 180,
      renderCell: (event) => (
        <div>
      <Button onClick={handleOpen}>Send</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Send Notification
          </Typography>
         <div style={{display:"flex",
        flexDirection:"column", gap:"10px"}}>
         <TextField onChange={(e)=>{
            setModal(e.target.value)
          }}  id="standard-basic" label="Notification" variant="standard" />
          <Button onClick={()=>{
            console.log(event.row.id)
             let obj:object = {
              id:event.row.id,
              title:modal

             }
             dispatch(sendNot(obj))
          }} variant="contained">Send Notification</Button>
          
         </div>
        </Box>
      </Modal>
    </div>
      ),
    },
    {
      field: "detail",
      headerName: "Detail",
      flex: 1,
      width: 190,
      renderCell: (e) => (
        <Link to={"/users/" + e.row.id}>
          <Button color="success" variant="contained">
            Detail
          </Button>
        </Link>
      ),
    },
  ];

  function DataTable() {
    return (
      <div
        style={{
          margin: "60px auto",
          width: "900px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Users</h1>
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={datas}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    );
  }
  return DataTable();
}

export default UserTable;
