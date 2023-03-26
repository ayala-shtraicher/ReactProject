import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UserDetail(){


const [userName,setUserName]=useState("");
const [userEmail,setUserEmail]=useState("");
const [userAdress,setUserAdress]=useState("");
const [userId,setUserId]=useState(0);
const navigateProducts = useNavigate();




useEffect(()=>
{
    async function dataUser()
    {
    await axios.get("./users.json").then(arrUsers=>{
    console.log("user details----",arrUsers.data);
    arrUsers.data.forEach((u)=>{
        if(localStorage.getItem("idUser")==u.id)  {
    console.log("name-- ",userName);
            setUserName(u.name);
        }
    })
})
    }
    dataUser();

},[]); 


async function save()
{
await axios.post("./users.json",{userId,userName,userEmail,userAdress});
navigateProducts(`/products`);
}

    return(
        <>
        <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" value={localStorage.getItem("nameUser")} onChange={(e)=>{setUserName(e.target.value)}} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setUserEmail(e.target.value)}}/>
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Adress</Form.Label>
  <Form.Control type="text" placeholder="Enter adress" onChange={(e)=>{setUserAdress(e.target.value)}}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>

<Button className="but" variant="primary" onClick={save} type="button">
  Save
</Button>
</Form>
 </>
    )
}