import React from 'react'
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap';

const MovieCard = ({movie}) => {
    return (
        <div>
            
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>

  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{movie.rate}</ListGroupItem>
    <ListGroupItem>{movie.description}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Add</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

        </div>
    )
}

export default MovieCard
