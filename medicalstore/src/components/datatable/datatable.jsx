import "./datatable.css"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  Medicine: string,
  Days: number,
  DosagesPerDay: number,      
) {
  return { Medicine, Days, DosagesPerDay};
}

const rows = [
  createData('Paracetamol', 10, 6),
  createData('Gontazol', 10, 9),
  createData('Gabatron', 12, 2),
  createData('Combiflam', 23,1),    
  createData('Jamalghota', 5,2),
];

export default function BasicTable() {
var name = "Jaydeep Jethwa";
var age = 25;

  return (
      <div className="table">
<h1>Patient Receipt</h1>
<div className="details">
<span> <b>Name</b>  : {name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span> <b>Age</b>  : {age}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

</div>
<div className="table">

    <TableContainer component={Paper} className="maintable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
          <TableRow>
            <TableCell >Medicine</TableCell>
            <TableCell align="center">Days</TableCell>
            <TableCell align="center">Dosages/day&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
              <TableRow
              key={row.Medicine}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                {row.Medicine}
              </TableCell>
              <TableCell align="center">{row.Days}</TableCell>
              <TableCell align="center">{row.DosagesPerDay}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
          <div className="btn">
          <button type="submit" className="button" >Verified</button>
          </div>
          </div>
  );
}