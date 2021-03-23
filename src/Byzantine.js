import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
const Byzantine = () => {
  return (
    <Container>
      <Row className='h-50'>
        <Col>
          <i className='fa fas-desktop'></i>
        </Col>
      </Row>
      <Row className='h-50'>
        <Col className='mr-auto'>2</Col>
        <Col className='ml-auto'>3</Col>
      </Row>
    </Container>
  );
};

export default Byzantine;
