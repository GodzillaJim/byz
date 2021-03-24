import React, { useState } from 'react';
import { Container, Col, Row, Button, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  STEP_ONE_REQUEST,
  STEP_TWO_REQUEST,
  STEP_TWO_SIGNED_MESSAGE,
  STEP_ONE_SIGNED_MESSAGE,
} from './constants';
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Byzantine = () => {
  const dispatch = useDispatch();
  const [stepOne, setStepOne] = useState(true);
  const [stepOneSigned, setStepOneSigned] = useState(true);

  const { general_0, general_1, general_2 } = useSelector(
    (state) => state.stepOne
  );
  const {
    general_0: general0,
    general_1: general1,
    general_2: general2,
  } = useSelector((state) => state.signedMessages);

  const handleStepOne = () => {
    dispatch({ type: STEP_ONE_REQUEST });
    $('#arrow-left').addClass('text-success');
    $('#arrow-right').addClass('text-success');
    $('#side-arrow-r, #side-arrow-l').removeClass('text-success');
    setStepOne(false);
  };
  const handleSignedStepOne = () => {
    dispatch({ type: STEP_ONE_SIGNED_MESSAGE });

    $('#side-arrow-r, #side-arrow-l').removeClass('text-success');
    $('#arrow-left-signed').addClass('text-success');
    $('#arrow-right-signed').addClass('text-success');
    setStepOneSigned(false);
  };
  const handleStepTwo = () => {
    $('#arrow-left').removeClass('text-success');
    $('#arrow-right').removeClass('text-success');
    $('#side-arrow-r, #side-arrow-l').addClass('text-success');
    dispatch({ type: STEP_TWO_REQUEST });
  };
  const handleSignedStepTwo = () => {
    $('#arrow-left-signed').removeClass('text-success');
    $('#arrow-right-signed').removeClass('text-success');
    $('#side-arrow-r-signed, #side-arrow-l-signed').addClass('text-success');
    dispatch({ type: STEP_TWO_SIGNED_MESSAGE });
  };
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/oral'>Oral Messages</Link>
            </li>
            <li>
              <Link to='/signed'>Signed messages</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/oral'>
            <Container>
              <Navbar className='bg-light justify-content-between'>
                <Button className='btn btn-info' onClick={handleStepOne}>
                  Step One
                </Button>
                <Button
                  disabled={stepOne}
                  className='btn btn-info'
                  onClick={handleStepTwo}
                >
                  Step Two
                </Button>
              </Navbar>
              <Row className='h-50 text-center m-3'>
                <Col className='mx-auto' md={4}>
                  <Row>
                    <Col md={3}>
                      <Row>
                        <Col
                          className='text-info h4'
                          style={{ fontWeight: 'bolder' }}
                        >
                          General 0
                        </Col>
                      </Row>
                      {general_0.action && (
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            Action
                          </Col>
                          <Col className='text-success'>{general_0.action}</Col>
                        </Row>
                      )}
                      {general_0.message_1 && (
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            Messages
                          </Col>
                          {!general_0.message_1 ? (
                            <Col>None</Col>
                          ) : (
                            <Col>
                              {general_0.message_1},{' ' + general_0.message_2}
                            </Col>
                          )}
                        </Row>
                      )}
                    </Col>
                    <Col className='text-center'>
                      <i
                        id='general_0'
                        className='fas text-primary fa-desktop text-center'
                        style={{ fontSize: '120px' }}
                      ></i>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className='text-center'>
                  <i
                    id='arrow-left'
                    className='fas arrows fa-arrow-down mx-auto'
                  ></i>
                </Col>
                <Col className='text-center'>
                  <i
                    id='arrow-right'
                    className='fas right-arrow text-right fa-arrow-down'
                  ></i>
                </Col>
              </Row>
              <Row className='h-50 m-3'>
                <Col md={5} className='mx-auto text-center'>
                  <Row>
                    <i
                      className='fas fa-desktop text-primary'
                      style={{ fontSize: '120px' }}
                    ></i>
                  </Row>
                  <Row className='m-2'>
                    <Col md={2}>
                      <Row>
                        <Col
                          className='text-info h4 text-left'
                          style={{ fontWeight: 'bolder' }}
                        >
                          General 1
                        </Col>
                      </Row>

                      {general_1.action && (
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            Action
                          </Col>
                          <Col>{general_1.action}</Col>
                        </Row>
                      )}
                      {general_0.message_1 && (
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            Messages
                          </Col>
                          {!general_0.message_1 ? (
                            <Col>None</Col>
                          ) : (
                            <Col>{`general_0: ${general_0.message_1}, ${
                              general_2.message_1
                                ? 'general_2: ' + general_2.message_1
                                : ''
                            }`}</Col>
                          )}
                        </Row>
                      )}
                    </Col>
                  </Row>
                </Col>
                <Col md={2} className='mx-auto'>
                  <Row className='justify-content-center mt-2'>
                    <i
                      id='side-arrow-r'
                      className='fas fa-arrow-right r-arrow mb-3'
                    ></i>
                  </Row>
                  <Row className='text-center justify-content-center'>
                    <i
                      id='side-arrow-l'
                      className='fas fa-arrow-left r-arrow mt-3'
                      style={{ top: '55px' }}
                    ></i>
                  </Row>
                </Col>
                <Col md={5} className='mx-auto m-3 text-center'>
                  <div className='ml-auto'>
                    <Row>
                      <i
                        className='fas fa-desktop ml-auto text-danger'
                        style={{ fontSize: '120px' }}
                      ></i>
                    </Row>
                    <Row className='m-2'>
                      <Col md={2} className='ml-auto'>
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            General 2
                          </Col>
                        </Row>
                        {general_2.action && (
                          <Row>
                            <Col
                              className='text-info h4'
                              style={{ fontWeight: 'bolder' }}
                            >
                              Action
                            </Col>
                            <Col>{general_2.action}</Col>
                          </Row>
                        )}
                        {general_0.message_2 && (
                          <Row>
                            <Col
                              className='text-info h4'
                              style={{ fontWeight: 'bolder' }}
                            >
                              Messages
                            </Col>
                            {!general_0.message_2
                              ? 'none'
                              : `general_0: ${general_0.message_2}, ${
                                  general_1.message_2
                                    ? 'general_1: ' + general_1.message_2
                                    : ''
                                }`}
                          </Row>
                        )}
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </Route>
          <Route path='/signed'>
            <Container>
              <Navbar className='bg-light justify-content-between'>
                <Button className='btn btn-info' onClick={handleSignedStepOne}>
                  Step One
                </Button>
                <Button
                  disabled={stepOneSigned}
                  className='btn btn-info'
                  onClick={handleSignedStepTwo}
                >
                  Step Two
                </Button>
              </Navbar>
              <Row className='h-50 text-center m-3'>
                <Col className='mx-auto' md={4}>
                  <Row>
                    <Col md={2}>
                      <Row>
                        <Col
                          className='text-info h4'
                          style={{ fontWeight: 'bolder' }}
                        >
                          General 0
                        </Col>
                      </Row>
                      {general0 && general0.action && (
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            Action
                          </Col>
                          <Col className='text-success'>{general0.action}</Col>
                        </Row>
                      )}
                      {general0 && (
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            Messages
                          </Col>
                          {general0 && !general0.message_1 ? (
                            <Col>None</Col>
                          ) : (
                            <Col>
                              {general0 && JSON.stringify(general0.message_1)},
                              {general0 &&
                                ' ' + JSON.stringify(general0.message_2)}
                            </Col>
                          )}
                        </Row>
                      )}
                    </Col>
                    <Col className='text-center'>
                      <i
                        id='general_0'
                        className='fas text-primary fa-desktop text-center'
                        style={{ fontSize: '120px' }}
                      ></i>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className='text-center'>
                  <i
                    id='arrow-left-signed'
                    className='fas arrows fa-arrow-down mx-auto'
                  ></i>
                </Col>
                <Col className='text-center'>
                  <i
                    id='arrow-right-signed'
                    className='fas right-arrow text-right fa-arrow-down'
                  ></i>
                </Col>
              </Row>
              <Row className='h-50 m-3'>
                <Col
                  md={4}
                  style={{ overflow: 'scroll' }}
                  className='mx-auto text-left'
                >
                  <Row>
                    <i
                      className='fas fa-desktop text-primary'
                      style={{ fontSize: '120px' }}
                    ></i>
                  </Row>
                  <Row className='m-2'>
                    <Col md={2}>
                      <Row>
                        <Col
                          className='text-info h4'
                          style={{ fontWeight: 'bolder' }}
                        >
                          General 1
                        </Col>
                      </Row>

                      {general1 && general1.action && (
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            Action
                          </Col>
                          <Col>{general1.action}</Col>
                        </Row>
                      )}
                      {general0 && (
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            Messages
                          </Col>
                          {general0 && !general0.message_1 ? (
                            <Col>None</Col>
                          ) : (
                            <Col>{`general_0: ${
                              general0 && JSON.stringify(general0.message_1)
                            }, ${
                              general2.message_1
                                ? 'general_2: ' +
                                  JSON.stringify(general2.message_1)
                                : ''
                            }`}</Col>
                          )}
                        </Row>
                      )}
                    </Col>
                  </Row>
                </Col>
                <Col md={4} className='mx-auto'>
                  <Row className='justify-content-center mt-2'>
                    <i
                      id='side-arrow-r-signed'
                      className='fas fa-arrow-right r-arrow mb-3'
                    ></i>
                  </Row>
                  <Row className='text-center justify-content-center'>
                    <i
                      id='side-arrow-l-signed'
                      className='fas fa-arrow-left r-arrow mt-3'
                      style={{ top: '55px' }}
                    ></i>
                  </Row>
                </Col>
                <Col md={4} style={{ overflow: 'scroll' }} className='mx-auto'>
                  <Row>
                    <i
                      className='fas fa-desktop mx-auto text-danger'
                      style={{ fontSize: '120px' }}
                    ></i>
                  </Row>
                  <Row className='m-2'>
                    <Col md={2} className='mx-auto'>
                      <Row>
                        <Col
                          className='text-info h4'
                          style={{ fontWeight: 'bolder' }}
                        >
                          General 2
                        </Col>
                      </Row>
                      {general2 && general2.action && (
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            Action
                          </Col>
                          <Col>{general2 && general2.action}</Col>
                        </Row>
                      )}
                      {general0 && (
                        <Row>
                          <Col
                            className='text-info h4'
                            style={{ fontWeight: 'bolder' }}
                          >
                            Messages
                          </Col>
                          {general0 && !general0.message_2
                            ? 'none'
                            : `general_0: ${
                                general0 && JSON.stringify(general0.message_2)
                              }, ${
                                general1.message_2
                                  ? 'general_2: ' +
                                    JSON.stringify(general1.message_2)
                                  : ''
                              }`}
                        </Row>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Byzantine;
