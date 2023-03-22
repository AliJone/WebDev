import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Ali Jone</Card.Title>
        <Card.Text>
          Bonjour, je m'apelle Ali Jone, je sui entidiant de france!
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