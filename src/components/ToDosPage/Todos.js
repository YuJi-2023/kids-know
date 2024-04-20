import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { TodoList, TodoItem } from "../UI/todolist";

const Todos = () => {
  const [todos, setTodos] = useState(TodoList());

  return (
    <>
      <Container className="my-5">
        <h3 className="text-center mb-4 text-primary"> My Daily Schedule is HERE!!</h3>
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
    </>
  );
};

export default Todos;
