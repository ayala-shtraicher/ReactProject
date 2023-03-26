import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersContex } from "./UserContext";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


export default function ProductsTable() {

    const productsCtx = useContext(usersContex);

  
const navigateAdd=useNavigate();
 
  
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>image</th>
                </tr>
                </thead>

                <tbody>

                {productsCtx.arrProducts.map((p, index) => 
                   <tr key={index}>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td><img style={{width:"40px"}} src={require(`../assets/${p.img}`)} /></td>
                    </tr>
                )}
                </tbody>
            </Table>
            <Button className="but" variant="primary" onClick={()=>{navigateAdd(`/addProduct`)}} type="button">
            add product
          </Button>
        </div>

    )
}