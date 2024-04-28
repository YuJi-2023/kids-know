import React, { useState } from "react";
import { Button, Container, Card, Row, Col, Collapse } from "react-bootstrap";
import routinePic from "../../assests/routinePic.jpg";

const Routine = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Container fluid className="mb-5 py-5 bg-light">
        <Row className="justify-content-md-center">
          <Col lg="8">
            <Card className="text-secondary border-light">
              <Card.Img src={routinePic} alt="routine image" />
              <Card.ImgOverlay className="p-5">
                <Card.Title className="fw-bold">
                  How Routine Helps Kids Grow
                </Card.Title>
                <Collapse in={expanded}>
                  <Card.Text>
                    Routines provide a structured and supportive environment for
                    young children to grow, learn, and thrive. They offer a
                    framework that promotes physical, emotional, cognitive, and
                    social development, laying the foundation for lifelong
                    skills and habits.
                  </Card.Text>
                </Collapse>
                <Button onClick={handleToggle}>
                  {expanded ? "Read less" : "Read more"}
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Routine;
