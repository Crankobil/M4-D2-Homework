import { Jumbotron, Button, Container } from "react-bootstrap";

const MyJumbatron = () => {
  return (
    <Jumbotron>
      <Container>
        <h1>Strive BookStore!</h1>
        <p>
          Choose from our list of Titles below.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default MyJumbatron;
