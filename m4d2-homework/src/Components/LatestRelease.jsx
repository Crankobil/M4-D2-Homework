import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import books from "../data/Books.json";

export default class BookList extends Component {
  render() {
    return (
      <Container>
        <Row className="row-cols-sm-1 row-cols-md-3 row-cols-lg-4">
          {books.map((book) => (
            <Col mb-3>
              <Card h-100>
                <Card.Img variant="top" src={book.img}/>
                <Card.Body>
                  <Card.Title className="line-clamp">{book.title}</Card.Title>
                    <Button mt-auto variant="secondary">${book.price}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
