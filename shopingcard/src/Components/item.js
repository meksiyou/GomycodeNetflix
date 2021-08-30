import React from 'react'
import {Products} from "../Products"
import  { Button,Card } from 'react-bootstrap';
import { Alert } from 'bootstrap';

function Item({product:{name,price}}) {
  const show =(e)=> alert(e);
  
    return (
        <div>
            
                 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {price}
    </Card.Text>
    <Button variant="details" onClick={()=>show(name)} >Details</Button>
  </Card.Body>
</Card>

        </div>
    )
}



export default Item
