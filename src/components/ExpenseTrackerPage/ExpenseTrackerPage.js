import React from "react";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";

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
      <Footer />
    </>
  );
};

export default ExpenseTrackerPage;
