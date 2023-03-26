import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from "react-router-dom";

export default function Product(){

  const {name,img,price}=useParams();
  const navigateBuy=useNavigate();

return(
      <Card style={{ width: '18rem',margin:"30%" }}>
      <Card.Img variant="top" src={require(`../assets/${img}`)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigateBuy(`/buy/${name}/${price}`)}}>for buying</Button>
      </Card.Body>
    </Card>
)
}
