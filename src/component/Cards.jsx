import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={props.img} />
        <Card.Title>{props?.name}</Card.Title>
        <Card.Text>
          {props?.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="primary">Go Anywhere</Button>
        <Button variant="primary">Go Already</Button>
      </Card.Body>
    </Card> 
    </>
  );
}

export default Cards;