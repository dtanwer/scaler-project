import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import React, { useRef } from "react";
export default function RoomBooking() {
  const navigater = useNavigate();
  const [formData, setFormData] = useState({});
  const formRef = useRef(null);

  const handleInputChange =  (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios({
      url:'/save',
      method:'POST',
      data:formData
    })
    .then(()=>{
      console.log("Data send successfully");
    })
    .catch((err)=>{
      console.log("fail to send",err);
    });
    formRef.current.reset();
    alert("Room Booked");

  };

  return (
    <Container>
      <h1 className='text-center'>Room Booking</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form  ref={formRef} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' placeholder="Enter name" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formCheckin">
              <Form.Label>Check-in Date</Form.Label>
              <Form.Control type="date" name='datein' onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formCheckout">
              <Form.Label>Check-out Date</Form.Label>
              <Form.Control type="date" name='dateout' onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formRoom">
              <Form.Label>Room No.</Form.Label>
              <Form.Control type="number" name='number' placeholder="Enter Room No." onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="forType">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" name='type' onChange={handleInputChange}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </Form.Control>
            </Form.Group>
            <Button variant="success" type="submit" className='m-2 mt-4'>Book Now</Button>
            <Button variant="danger" className='m-2 mt-4' onClick={() => navigater('/')}>Cancel</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
