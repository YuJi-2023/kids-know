import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const BACKEND_URL = "http://localhost:8000";

const ExpenseForm = ({ onAddExpense }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  // define async function to handle POST request
  const handleNewExpense = async (newExpense) => {
    try {
      const response = await fetch(`${BACKEND_URL}/tracker`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExpense),
      });

      if (!response.ok) {
        // Handle HTTP errors
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
      throw error;
    }
  };

  const handleAddtotracker = (e) => {
    //job1: update expenseList
    e.preventDefault();
    const newExpense = {
      category,
      amount,
      date,
      description,
    };
    onAddExpense(newExpense);
    setCategory("");
    setAmount("");
    setDate("");
    setDescription("");

    //job2: call handle POST function for db storage
    handleNewExpense(newExpense);
  };

  return (
    <>
      <Container className="mb-3">
        <Row>
          <Col className="bg-primary p-5">
            <Form>
              <Row className="formGroupRow">
                <Col className="formGroupCol">
                  <Form.Group className="mb-3" controlId="formGroupCatergory">
                    <Form.Label>Catergory</Form.Label>
                    <Form.Select
                      aria-label="select category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>Select One</option>
                      <option value="Toys">Toys</option>
                      <option value="Study">Study</option>
                      <option value="Snacks">Snacks</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col className="formGroupCol">
                  <Form.Group className="mb-3" controlId="formGroupAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      type="number"
                      step="0.10"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col className="formGroupCol">
                  <Form.Group className="mb-3" controlId="formGroupDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="Date"
                      placeholder="Enter Date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="formGroupRow">
                <Col className="formGroupCol">
                  <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      type="Description"
                      placeholder="Enter Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Button
              onClick={handleAddtotracker}
              variant="secondary"
              type="submit"
            >
              Add To Tracker
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExpenseForm;
