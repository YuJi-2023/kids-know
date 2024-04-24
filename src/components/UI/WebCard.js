import React from "react";
import Card from "react-bootstrap/Card";

const WebCard = ({ imgSrc, title, text }) => {
  return (
    <Card
      style={{ width: "15rem" }}
      className="py-3 text-secondary border-primary"
    >
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WebCard;
