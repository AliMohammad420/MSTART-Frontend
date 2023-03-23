import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Homepage = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6}>
          <h1>Welcome to My Website!</h1>
          <p>Thanks for stopping by. Feel free to browse around and learn more about me.</p>
          <Button variant="primary" href="/deals">Add Deals</Button>&nbsp;
          <Button variant="primary" href="/griddeal">View Deals</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
