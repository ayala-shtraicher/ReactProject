import React, { useContext } from "react";
import { usersContex } from "./UserContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Donation(){

const usersCtx=useContext(usersContex);

let name="";
let price=0;
    return(
        <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" onChange={(event)=>{name=event.target.value}} value={localStorage.getItem("nameUser")} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Price</Form.Label>
  <Form.Control type="text" placeholder="sum donation" onChange={(event)=>{price=event.target.value}} />
</Form.Group>

<Button className='but' variant="primary" type="button" onClick={()=>{usersCtx.arrDonations.push({name,price})}}>
finish?
      </Button>
</Form>
        </>
    )
}