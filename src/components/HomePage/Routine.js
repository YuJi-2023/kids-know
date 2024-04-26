import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import WebBtn from "../UI/WebBtn";
import routinePic from "../../assests/routinePic.png";

const Routine = () => {
  return (
    <>
      <Container fluid className="mb-5 py-5 bg-light">
        <Row className="justify-content-md-center">
          <Col lg="8">
            <Card className="text-primary border-light">
              <Card.Img
                src={routinePic}
                alt="routine image"
              />
              <Card.ImgOverlay className="p-5">
                <Card.Title>How Routine Helps Kids Grow</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <WebBtn text="Read more">Go somewhere</WebBtn>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default Routine;
