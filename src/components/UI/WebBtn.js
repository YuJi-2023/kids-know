import Button from "react-bootstrap/Button";

const WebBtn = ({text}) => {
  return (
    <>
      <Button href="mailto:sophia.jiyu@gmail.com" variant="outline-primary">{text}</Button>
    </>
  );
};

export default WebBtn;
