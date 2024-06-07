import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddtotracker = (e) => {
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
  };

  const handleCatergotyChange = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const selectedText = e.target.options[selectedIndex].text;
    setCategory(selectedText);
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
                      onChange={handleCatergotyChange}
                    >
                      <option>Select One</option>
                      <option value="1">Toys</option>
                      <option value="2">Study</option>
                      <option value="3">Snacks</option>
                      <option value="3">Other</option>
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
