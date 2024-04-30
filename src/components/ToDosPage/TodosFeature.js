import {
  Award,
  Database,
  Key,
  ShieldCheck,
  Gem,
  Stars,
} from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";
import WebFeature from "../UI/WebFeature";

const features = [
  {
    id: 1,
    icon: Award,
    text: "Super Achiver Badge",
  },
  {
    id: 2,
    icon: Database,
    text: "Busy Builder Block",
  },
  {
    id: 3,
    icon: Key,
    text: "Magical Key",
  },
  {
    id: 4,
    icon: ShieldCheck,
    text: "Defence-all Shield",
  },
  {
    id: 5,
    icon: Gem,
    text: "One-of-a-kind Glow",
  },
  {
    id: 6,
    icon: Stars,
    text: "Mysterious Surprise",
  },
];

const TodosFeature = () => {
  return (
    <>
      <Container fluid className="text-center text-secondary py-5">
        <Row className="justify-content-md-center mb-4">
          <Col>
            <h2 className="text-primary"> Unlock Your Rewards</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center px-5 mb-4">
          {features.map((feature) => (
            <Col key={feature.id}>
              <WebFeature feature={feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TodosFeature;
