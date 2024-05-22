import React from "react";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import WebBtn from "../UI/WebBtn";
import trackerHero from "../../assests/TrackerPage/trackerHero.jpg";
import badge_1 from "../../assests/TrackerPage/badges/badge_1.png";
import badge_2 from "../../assests/TrackerPage/badges/badge_2.png";
import badge_3 from "../../assests/TrackerPage/badges/badge_3.png";
import badge_4 from "../../assests/TrackerPage/badges/badge_4.png";

const ExpenseTrackerPage = () => {
  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          <Col xs={12} md={8} className="px-5">
            <h3 className="text-center mb-4 text-primary">
              My Expense Tracker
            </h3>
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Subject</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td colSpan={2}>Total</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col xs={0} md={4} className="px-5">
            <Image
              fluid
              src="https://edgeearlylearning.com.au/wp-content/uploads/2024/02/parents-guide-to-pocket-money-image.jpg"
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Image fluid src={badge_1} />
          </Col>
          <Col xs={6} md={3}>
            <Image fluid src={badge_2} />
          </Col>
          <Col xs={6} md={3}>
            <Image fluid src={badge_3} />
          </Col>
          <Col xs={6} md={3}>
            <Image fluid src={badge_4} />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 px-0" fluid>
        <div
          className="py-5 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${trackerHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "640px",
          }}
        >
          <Row>
            <Col xs={{ span: 4, offset: 4 }} className="text-center">
              <WebBtn text="Get Started" link={""} />
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ExpenseTrackerPage;
