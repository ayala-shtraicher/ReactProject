import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");


    let role = "user";

    const producsNavigate=useNavigate();

    const getStart = async () => {
     await axios.get("./users.json").then(arrUsers=>{
        if (arrUsers.data.map(u =>
            u.name == name && u.password == password
        )){
             props.setIsLogin(true);
             producsNavigate(`/products`)
        }
           
            else
            alert("user not exist");
        if (name == "ayala" && password == "123") {
            role = "manager";
        }
        localStorage.setItem("roleUser", role);
        localStorage.setItem("nameUser", name);
        localStorage.setItem("idUser", id);
     });

       

    }
    const goOut = () => {
        alert("you are going out");
        localStorage.clear();
    }
    return (
        <Form style={{margin:"50px"}}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" onChange={(e) => { setName(e.target.value) }} required />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>user id</Form.Label>
  <Form.Control type="number" onChange={(e) => { setId(e.target.value) }} required />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required/>
      </Form.Group>

      <Button className='but' variant="primary" type="button" onClick={getStart}>
      Login
      </Button>

      <Button className='but' variant="primary" type="button" onClick={goOut}>
      Logout
      </Button>
</Form>
    )
}