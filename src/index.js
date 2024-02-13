import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardChecklist, Trash } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import { createRoot } from "react-dom/client";
import Table from "./components/table";

function TodoList() {
  return [
    {
      id: 1,
      title: "Dress-up",
      completed: false,
    },
    {
      id: 2,
      title: "Pack-up",
      completed: false,
    },
    {
      id: 3,
      title: "Breakkie",
      completed: false,
    },
    {
      id: 4,
      title: "School-time",
      completed: false,
    },
    {
      id: 5,
      title: "Free-play",
      completed: false,
    },
    {
      id: 6,
      title: "Homework",
      completed: false,
    },
  ];
}

function TodoItem(props) {
  return (
    <InputGroup key={props.id}>
      <InputGroup.Checkbox
        defaultChecked={props.completed}
        onChange={props.onToggle}
      />
      <FormControl
        defaultValue={props.title}
        style={{
          textDecoration: props.completed ? "line-through" : "none",
        }}
      />
      <Button variant="outline-danger" onClick={props.onDelete}>
        <Trash />
      </Button>
    </InputGroup>
  );
}

function App() {
  const [todos, setTodos] = useState(TodoList());

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <CardChecklist /> My Daily Schedule
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
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
      </Container>
      <Container>
        <div className="mt-3">
          <Table></Table>
        </div>
      </Container>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
