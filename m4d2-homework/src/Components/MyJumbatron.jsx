import { Jumbotron, Button, Container } from "react-bootstrap";

const MyJumbatron = () => {
  return (
    <Jumbotron>
      <Container>
        <h1>Welcome to Strive BookStore!</h1>
        <p>
          Choose from our list of Titles below.
        </p>
        <p>
          <Button variant="secondary">Buy Now</Button>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default MyJumbatron;
