import React from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Buy()
{
  const {name,price}  =useParams();

return(
    <>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text"  value={name}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Price</Form.Label>
  <Form.Control type="text"  value={price}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Credit card</Form.Label>
  <Form.Control type="text"  />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>CVW</Form.Label>
  <Form.Control type="text"  />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>year</Form.Label>
  <Form.Control type="text"  />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>month</Form.Label>
  <Form.Control type="text"  />
</Form.Group>

<Button variant="primary">אישור</Button>

</Form>
    </>
)

}