import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export function TodoList() {
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

export function TodoItem(props) {
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
      <Button variant="outline-primary" onClick={props.onDelete}>
        <Trash />
      </Button>
    </InputGroup>
  );
}

export default TodoList;
