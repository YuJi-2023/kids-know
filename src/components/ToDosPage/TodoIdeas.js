import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import WebCard from "../UI/WebCard";
import idea1 from "../../assests/TodoPage/Ideas/idea1.png";
import idea2 from "../../assests/TodoPage/Ideas/idea2.png";
import idea3 from "../../assests/TodoPage/Ideas/idea3.jpeg";

const TodoIdeas = () => {
  return (
    <>
      <Container fluid className="text-center text-secondary bg-primary py-5">
        <Row className="justify-content-md-center mb-4">
          <Col>
            <h2 className="text-white">Top Ideas</h2>
          </Col>
        </Row>
        <Stack
          direction="horizontal"
          gap={5}
          className="justify-content-center mb-4"
        >
          <WebCard
            imgSrc={idea1}
            title="Get Inspired"
            text="Every child is born a creator, let's nurture that spark and watch greatness unfold!"
          />
          <WebCard
            imgSrc={idea2}
            title="Sprouting"
            text="From tiny seeds to towering dreams, watch kids sprout into greatness!"
          />
          <WebCard
            imgSrc={idea3}
            title="Big Shout Out"
            text="Let the young heart embrace victories! Paving for an extraordinary journey!"
          />
        </Stack>
      </Container>
    </>
  );
};

export default TodoIdeas;
