import React, { useContext, useState } from "react";
import { usersContex } from "./UserContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function AddProduct()
{

  const productsCtx=useContext(usersContex);

const [nameProduct,setNameProduct]=useState("")
const [priceProduct,setPriceProduct]=useState(0)
const [idProduct,setIdProduct]=useState(0)
const [imageProduct,setImageProduct]=useState("")

   function saveProduct () {
    console.log(productsCtx)
    productsCtx.arrProducts.push({ nameProduct, idProduct, priceProduct, imageProduct });
    }


    return(
        <>
        <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text"  onChange={(event) => { setNameProduct(event.target.value)  }} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Id</Form.Label>
  <Form.Control type="number"  onChange={(event) => { setIdProduct(event.target.value) }}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Price</Form.Label>
  <Form.Control type="number"  onChange={(event) => { setPriceProduct(event.target.value) }}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Image</Form.Label>
  <Form.Control type="text"  onChange={(event) => { setImageProduct(event.target.value) }}/>
</Form.Group>

<Button className='but' variant="primary" type="button" onClick={saveProduct}>
      Save
      </Button>

        </Form>
    </>
    )
}