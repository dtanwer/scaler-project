import React from 'react';
import { useNavigate } from "react-router-dom";
import { Navbar,Container,Button } from 'react-bootstrap';

function NavBar() {
    const navigater=useNavigate()
    return (
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">TheHotel</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              <Button variant="primary" onClick={()=>navigater('/details')}>Check Booking</Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar;
