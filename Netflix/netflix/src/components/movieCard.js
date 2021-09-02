import React from 'react'
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap';

const MovieCard = ({movie}) => {
    return (
        <div>
            <div className="Card">
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
    
  </Card.Body>
</Card>
              </div>
                   
        </div>
    )
}

export default MovieCard
