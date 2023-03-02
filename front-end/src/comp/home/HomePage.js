import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import HomeCard from './HomeCard';
import NavBar from '../navbar/NavBar';

const HomePage = () => {
    const [backendData, setBackendData] = useState([{}])
    useEffect(()=>{
        fetch("https://hotelmanagement-api.vercel.app/rooms").then(
          response=>response.json()
        ).then(
          data=>{
            setBackendData(data)
          }
        )
      },[])

    return (
        <div>
            <NavBar />
            <Container>
                <h1 className='text-center m-5' >Welcome to our Hotel</h1>
                <h3>Available Rooms</h3>
                <Row>
                    {(typeof backendData == 'undefined') ? (
                        <p>Loding...</p>
                    ) : (
                        backendData.map((user, i) => (
                            <HomeCard type={user.type} room={user.room} price={user.price} />
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
