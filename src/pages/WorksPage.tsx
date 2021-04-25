import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export function WorksPage(): JSX.Element {
  return (
    <>
    <Container fluid>
      <Container fluid>
        <Row><Col>Projects</Col></Row>
        <Row>
          <Col>
            <Container fluid>
              <Row><Col>anecdote-app</Col></Row>
              <Row><Col>Learning Android! It’s my first app and I want to take to through the full SDLC to the app store, so I’m being super secretive about it here. Ask me if you’re curious. Currently it is a sad shell of an Android app.</Col></Row>
            </Container>
            <Container fluid>
              <Row><Col>LispJS</Col><Col><a href="https://github.com/john-patterson/lispjs">Source</a></Col></Row>
              <Row><Col>A small custom lisp dialect. The interpreter is implemented in JS. This project was designed using TDD methodologies. Has Lists, Identifiers, Numbers, Expressions, Conditional statements (if), Lambdas, define, and function invocation! Oh my!</Col></Row>
            </Container>
            <Container fluid>
              <Row><Col>Passcal</Col><Col><a href="https://github.com/john-patterson/passcal">Source</a></Col></Row>
              <Row><Col>Following along to the <a href="https://ruslanspivak.com/lsbasi-part1/">Let’s Build A Simple Interpreter</a> series by Ruslan Spivak. Implementation of the Pascal language in Python. With unit-tests! You should check out Ruslan’s site if you haven’t, he’s got a lot of good series on making neat tools from scratch.</Col></Row>
            </Container>
            <Container fluid>
              <Row><Col>Wavvy</Col><Col><a href="https://github.com/john-patterson/wavvy">Source</a></Col></Row>
              <Row><Col>Dashboard for Wave API enabled thermostat at the office. Intended to collect data on the changing of the thermostat to find the best configuration for both rooms. Acadian just called the AC company to come and fix it, instead.</Col></Row>
            </Container>
            <Container fluid>
              <Row><Col>The Pit VR</Col><Col><a href="https://github.com/john-patterson/Build-A-Bridge">Source</a></Col></Row>
              <Row><Col>First Unity project for VR class. Integrates a Kinect V2, a Leap Motion controller, and an Oculus DK2 HMD using the RUIS VR toolkit. User places a bridge using the Leap and is then forced to walk along the bridge they made.</Col></Row>
            </Container>
          </Col>
        </Row>
        <Row><Col>Presentations</Col></Row>
        <Row>
          <Col>
          <Container fluid>
            <Row><Col>F# for great good</Col><Col><a href="https://www.johnppatterson.com/assets/documents/fsharp_asg.pdf">PDF Slide Deck</a></Col></Row>
            <Row><Col>Presentation I originally gave for the Acadian Software Group in Lafayette, LA on Feburary 8th, 2017. Gentle introduction to what functional programming and F# have to offer. Covers language basics; glosses over more advanced topics like Computation Expressions, Active Patterns, and Type Providers; and tops it off with a little advice on where to look for more information.</Col></Row>
          </Container>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}
