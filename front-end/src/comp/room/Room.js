import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
export default function Room(props) {
  const navigater=useNavigate()
  return (
    <div style={{ width: '18rem'}}>
      <Card>
      <Card.Body>
        <Card.Title> Room No.-{props.room} {props.number}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.name}</Card.Subtitle>
        <Card.Text>
          Check In Time: {props.checkin}
        </Card.Text>
        <Button variant="success" onClick={()=>navigater('/book')} className='m-2'>Update</Button>
        <Button href='#' variant="primary" className='m-2'>Check Out</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

