import {Button,Card}from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function HomeCard(props) {
  const navigater=useNavigate()
  return (
    <Card  className='m-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/188608725.jpg?k=a2da6cbd229671fdf59a11fcaf6352c3b97f2fc1c7099af6665dbeb6f6230579&o=" />
      <Card.Body>
        <Card.Title>Room Type -{props.type}</Card.Title>
        <Card.Text>
          Rooms No. :{props.room} <br />
          <b>Price : {props.price}</b>

        </Card.Text>
        <Button variant="primary" onClick={()=>navigater('/book')}>Book</Button>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;