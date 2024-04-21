import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import WeeklySchedule from "../../assests/WeeklySchedule.jpg";

const SchPage = () => {
  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          <Col>
            <Image src={WeeklySchedule} alt="weeklySchImg" fluid />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SchPage;
