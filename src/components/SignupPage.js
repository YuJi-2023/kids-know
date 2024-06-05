import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const BACKEND_URL = "http://localhost:8000";

const SignupPage = () => {
  const [signup, setSignup] = useState({
    name: "",
    password: "",
  });

  const handleSignup = async () => {
    const response = await checkUserInfo(signup.name, signup.password);
    console.log(response);
  };

  const checkUserInfo = async (name, password) => {
    try {
      const response = await fetch(`${BACKEND_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      if (!response.ok) {
        // Handle HTTP errors
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      return response;
    } catch (error) {
      // Log and rethrow the error for further handling
      console.error("Failed to fetch:", error);
      throw error;
    }
  };

  const handleChange = (e, field) => {
    if (field === "name") {
      setSignup({ ...signup, name: e.target.value });
    }
    if (field === "password") {
      setSignup({ ...signup, password: e.target.value });
    }
  };

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
          <Col className="bg-primary p-5">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => handleChange(e, "name")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handleChange(e, "password")}
                />
              </Form.Group>
            </Form>

            <Button onClick={handleSignup} variant="secondary" type="submit">
              Sign Up
            </Button>
          </Col>
          <Col lg="4"></Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
