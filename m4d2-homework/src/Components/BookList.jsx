import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import books from "../data/Books.json";

export default class BookList extends Component {
  render() {
    return (
      <Container>
        <Row className="row-cols-sm-1 row-cols-md-3 row-cols-lg-5">
          {books.map((book) => (
            <Col my-4>
              <Card h-100>
                <Card.Img variant="top" src={book.img}/>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    This is where the movie description should go
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
