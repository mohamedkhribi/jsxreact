
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Player(props) {
    console.log(props)
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={props.elimg} />
      <Card.Body>
        <Card.Title>{props.elname}</Card.Title>
        <Card.Text>
          {props.elteam}
        </Card.Text>
        <Card.Text>
          {props.elnati}
        </Card.Text>
        <Card.Text>
          {props.elnumber}
        </Card.Text>
        <Card.Text>
          {props.elage}
        </Card.Text>
        {props=user?<Button variant="primary">Go somewhere</Button>:null}
      </Card.Body>
    </Card>
  );
}

export default Player;

Player DefaultProps{
user:"user"
}



