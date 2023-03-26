 import React, { useContext } from "react";
 import Table from 'react-bootstrap/Table';
import { usersContex } from "./UserContext";



export default function AllDonation(){

   const donationCtx=useContext(usersContex);
    

    return(
        <>
         <Table striped bordered hover>
            <thead>
        <tr>
            <th>name</th>
            <th>price</th>
        </tr>
        </thead>
        <tbody>

        {donationCtx.arrDonations.map((d,index)=>
        <tr key={index}>
        <td>{d.name}</td>
        <td>{d.price}</td>
        </tr>
        )}
                </tbody>

       </Table>
        </>
    )
}