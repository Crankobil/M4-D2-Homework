import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import books from "../data/Books.json";

export default class BookList extends Component {
  render() {
    return (
      <Container>
        <Row className="row-cols-sm-1 row-cols-md-3 row-cols-lg-4 my-4">
          {books.map((book) => (
            <Col>
              <Card h-100>
                <Card.Img variant="top" src={book.img}/>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    This is a "MUST READ"
                  </Card.Text>
                  <Button variant="secondary">${book.price}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
