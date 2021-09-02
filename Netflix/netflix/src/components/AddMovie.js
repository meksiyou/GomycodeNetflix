import React, {useState,useRef} from "react";
import {Button,Modal,Form,Row,Col} from 'react-bootstrap';
import MoviesData from './data';
import MovieCard from "./movieCard"


function AddMovie({movie}) {

const [name,setName] = useState(movie.name);
const [rate,setRate] = useState(movie.rate);
const [description,setDescription] = useState(movie.description);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let RefName = useRef();
    let RefRate = useRef();
    let RefDescription = useRef();
    
  
    const handleChange=()=>{
      setName(RefName.current.value);
      setDescription(RefDescription.current.value);
      console.log(RefName)
    }
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add a new movie
        </Button>
        
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          <Form>
    <Row>
      <Col>
       <Form.Label>Name of the movie</Form.Label>
        <Form.Control placeholder="enter the name of the movie" ref={RefName}/>
      </Col>
      <Col>
      <Form.Label>Rate</Form.Label>
        <Form.Control placeholder="rate" ref={RefRate} />
      </Col>
    </Row>
    <Row>
      <Col>
      <Form.Label>Description</Form.Label>
        <Form.Control placeholder="Describe the movie" ref={RefDescription} />
      </Col>
        <Col>
      <Form.Label>Picture</Form.Label>
        <Form.Control placeholder="Enter the URL of the picture" />
      </Col>
      </Row>
  </Form>
  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleChange}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  
  export default AddMovie 