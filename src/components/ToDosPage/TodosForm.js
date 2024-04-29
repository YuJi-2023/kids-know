import React, { useState } from "react";
import { TodoList, TodoItem } from "../UI/todolist";
import { Container, Row, Col } from "react-bootstrap";

const TodosForm = ({ title }) => {
  const [todos, setTodos] = useState(TodoList());

  return (
    <>
      <Container className="my-5" fluid>
        <Row className="justify-content-md-center">
          <Col lg="8">
            <h3 className="text-center mb-4 text-primary"> {title}</h3>
            <div>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  onDelete={() => {
                    setTodos(todos.filter((x) => x.id !== todo.id));
                  }}
                  onToggle={() => {
                    setTodos(
                      todos.map((x) =>
                        x.id === todo.id ? { ...x, completed: !x.completed } : x
                      )
                    );
                  }}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TodosForm;
