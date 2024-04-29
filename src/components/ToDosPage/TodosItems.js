import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import WebCard from "../UI/WebCard";
import todoItemsList from "./itemlist";

const TodoItems = ({ name, imgSrc }) => {
  return (
    <>
      <Container fluid className="text-center text-secondary bg-primary py-5">
        <Row className="justify-content-md-center mb-4">
          <Col>
            <h2 className="text-white">Pick Your Todos</h2>
          </Col>
        </Row>
        <Row>
          <Stack
            direction="horizontal"
            gap={3}
            className="justify-content-center mb-4 px-5"
          >
            {todoItemsList.map((item) => (
              <WebCard imgSrc={item.imgSrc} title={item.name} />
            ))}
          </Stack>
        </Row>
      </Container>
    </>
  );
};

export default TodoItems;
