import Button from "react-bootstrap/Button";

const WebBtn = ({text, link}) => {
  return (
    <>
      <Button href={link} variant="outline-primary">{text}</Button>
    </>
  );
};

export default WebBtn;
