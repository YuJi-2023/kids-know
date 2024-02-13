import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { CardChecklist } from "react-bootstrap-icons";
import { TodoList, TodoItem } from "./components/todolist";
import Table from "./components/table";

function App() {
  const [todos, setTodos] = useState(TodoList());

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kids Know</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Navbar bg="dark" variant="dark" className="mt-3">
          <Container>
            <Navbar.Brand>
              <CardChecklist /> My Daily Schedule
            </Navbar.Brand>
          </Container>
        </Navbar>
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
      </Container>
      <Container>
      <Navbar bg="dark" variant="dark" className="mt-3">
          <Container>
            <Navbar.Brand>
              <CardChecklist /> My Expense Tracker
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div>
          <Table></Table>
        </div>
      </Container>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
