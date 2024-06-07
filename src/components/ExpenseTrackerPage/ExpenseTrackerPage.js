import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import WebBtn from "../UI/WebBtn";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import trackerHero from "../../assests/TrackerPage/trackerHero.jpg";
import badge_1 from "../../assests/TrackerPage/badges/badge_1.png";
import badge_2 from "../../assests/TrackerPage/badges/badge_2.png";
import badge_3 from "../../assests/TrackerPage/badges/badge_3.png";
import badge_4 from "../../assests/TrackerPage/badges/badge_4.png";

const ExpenseTrackerPage = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          <Col xs={12} md={8} className="px-5">
            <h3 className="text-center mb-4 text-primary">
              My Expense Tracker
            </h3>
            <ExpenseForm onAddExpense={addExpense} />
            <ExpenseTable expenses={expenses} />
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
