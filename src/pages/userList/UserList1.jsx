import React from 'react'
import { BrowserRouter, Route,Routes,useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { Button, TablePagination } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./userList.css";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { DeleteOutline } from '@material-ui/icons';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


 


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function UserList() {

  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  }
  

  const navigate = useNavigate();

  var CryptoJS = require("crypto-js");
   const [tableData,setTableData] = useState([]);
  const e1 =sessionStorage.getItem("Username")
  var b1 = CryptoJS.AES.decrypt(e1, 'unam@encrypt');
  var uname = b1.toString(CryptoJS.enc.Utf8);
  const e2 =sessionStorage.getItem("Password")
  var b2 = CryptoJS.AES.decrypt(e2, 'pass@encrypt');
  var pwd = b2.toString(CryptoJS.enc.Utf8);
  function popup(id,uname)
  {
    return (
      <React.Fragment>
        <Button onClick={() =>  Delete(id,uname)}>Yes</Button>
        <Button align ="right"onClick={handleClose}>No</Button>
       
      </React.Fragment>
    );
  }
  function Delete(id)
  {
      console.log(id);
    }

 

  async function CustomerDetails() {

    try {
      let result = await fetch(
        "virtserver.swaggerhub.com/Iotech4/lol/1.0.0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json0",
            Accept: "application/json",
            username: uname,
            password: pwd,
  
          },
        }
      );
      result = await result.json();
       setTableData(JSON.parse(JSON.stringify(result)));
   
       console.log(tableData);
    } catch (error) {
    }
   
  
  }
useEffect(()=>{
CustomerDetails();

},[])
  return (
    <div className='userList'>
      <div className='userListUser'></div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Password</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow
              key={row.username}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
             < div align="right">
             <TableCell > <button  className="userListEdit">Edit</button></TableCell>
            
             
             <TableCell >
             <DeleteOutline
             className="userListDelete"
             onClick={() => { popup(row.id,row.username)}}/>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
             >
              <Box sx={{ ...style, width: 400 }}>
               <h2 id="parent-modal-title">Do you Really want to Delete this User?</h2>
              <p id="parent-modal-description">
              Click yes to confirm! 
              </p>
            <ChildModal />
            </Box>
          </Modal>
             
           </TableCell>
             </div>

            </StyledTableRow>
          ))}
        </TableBody>
        
            <TablePagination />
          
      </Table>
    </TableContainer>
    <div>
      
     
    </div>
  
    
    </div>
  )

  
}


