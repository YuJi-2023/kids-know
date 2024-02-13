import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { TodoList, TodoItem } from "./components/todolist";
import ExpenseList from "./components/expense-tracker/ExpenseList";
import MyNavBar from "./components/navBar";

function App() {
  const [todos, setTodos] = useState(TodoList());

  return (
    <>
      <MyNavBar />

      <Container className="mb-3">
        <h3> My Daily Schedule</h3>
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
        <h3>My Expense Tracker</h3>
        <div>
          <ExpenseList />
        </div>
      </Container>
    </>
  );
}

export default App;
