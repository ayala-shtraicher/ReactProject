import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { usersContex } from "./UserContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Products(){

   const productsCtx=useContext(usersContex);
   const navigateDetails = useNavigate();


    return(
      <div>
        {
          productsCtx.arrProducts.map((item,index)=>
          <Card  style={{ width: '18rem',  display: 'inline-flex'}} key={index} >
        <Card.Img variant="top" src={require(`../assets/${item.img}`)}/>
        <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigateDetails(`/product/${item.name}/${item.img}/${item.price}`)}}>details</Button>
        </Card.Body>
        </Card>
       ) }
    </div>
    )
}
