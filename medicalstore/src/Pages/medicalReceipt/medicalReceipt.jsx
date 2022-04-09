import './medicalReceipt.css'
import NavigationBar from "../src/components/navbar/navbar"

import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Receipt(){
var id=12345;
    return(
        <div >
            <NavigationBar/>
            <div className='card'>
                <div className='container'>
                    <h3>Patient ID : {id} Receipt</h3>
                    
                </div>

            </div>
        </div>

    );

}
export default Receipt;