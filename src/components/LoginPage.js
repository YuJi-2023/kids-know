import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={{ span: 4, offset: 4 }}>
            <Row>
              <Col sm={{ span: 8, offset: 2 }}>
                <Link to="/index.html">
                  <Image fluid src={logo} alt="header-logo" />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="4"></Col>
          <Col className="bg-secondary p-5">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Col>
          <Col lg="4"></Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
