import React from 'react'
import Room from '../room/Room';
import Filter from './Filter';
import './details.css'
import { useEffect,useState} from "react";
import { Container,Row,Col } from 'react-bootstrap';
export default function Details() {
    const [backendData,setBackendData]=useState([{}])
  useEffect(()=>{
    fetch("https://hotelmanagement-api.vercel.app/bookings").then(
      response=>response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  },[])
  
  return (
    <div>
      <div>
      <Row>
        <Col>
          <h1 className='m-5'>Booked Room</h1>
        </Col>
        <Col className="d-flex justify-content-end  m-5">
        <Filter />
        </Col>
      </Row>
      </div>
    
      <Container>
      <Row>
      {( typeof backendData=='undefined')?(
        <p>Loding...</p>
      ):(
        backendData.map((user,i)=>(
            <Room key={i} room={user.type} name={user.name} number={user.number} checkin={user.datein} />
        ))
      )}
      </Row>
    </Container>
    </div>
  )
}
