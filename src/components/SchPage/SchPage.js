import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { Container, Row, Col, Image, Figure, Stack } from "react-bootstrap";
import WeeklySchedule from "../../assests/SchPage/WeeklySchedule.jpg";
import icon_1 from "../../assests/SchPage/SchIcons/icon_1.png";
import icon_2 from "../../assests/SchPage/SchIcons/icon_2.png";
import icon_3 from "../../assests/SchPage/SchIcons/icon_3.png";
import icon_4 from "../../assests/SchPage/SchIcons/icon_4.png";
import icon_5 from "../../assests/SchPage/SchIcons/icon_5.png";
import icon_6 from "../../assests/SchPage/SchIcons/icon_6.png";
import icon_7 from "../../assests/SchPage/SchIcons/icon_7.png";
import icon_8 from "../../assests/SchPage/SchIcons/icon_8.png";
import icon_9 from "../../assests/SchPage/SchIcons/icon_9.png";
import icon_10 from "../../assests/SchPage/SchIcons/icon_10.png";
import icon_11 from "../../assests/SchPage/SchIcons/icon_11.png";
import icon_12 from "../../assests/SchPage/SchIcons/icon_12.png";

const SchPage = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className="py-5 bg-primary text-center text-white">
            <Stack gap={3} direction="vertical">
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_1}
                />
                <Figure.Caption>Spelling</Figure.Caption>
              </Figure>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_2}
                />
                <Figure.Caption>Reading</Figure.Caption>
              </Figure>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_3}
                />
                <Figure.Caption>Maths</Figure.Caption>
              </Figure>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_4}
                />
                <Figure.Caption>Homework</Figure.Caption>
              </Figure>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_5}
                />
                <Figure.Caption>Screen Time</Figure.Caption>
              </Figure>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_6}
                />
                <Figure.Caption>Swimming</Figure.Caption>
              </Figure>
            </Stack>
          </Col>
          <Col md={9} className="py-5 bg-primary">
            <Image src={WeeklySchedule} alt="weeklySchImg" fluid />
          </Col>
          <Col className="py-5 bg-primary text-center text-white">
            <Stack gap={3} direction="vertical">
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_7}
                />
                <Figure.Caption>Sports</Figure.Caption>
              </Figure>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_8}
                />
                <Figure.Caption>Karate</Figure.Caption>
              </Figure>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_9}
                />
                <Figure.Caption>Violin</Figure.Caption>
              </Figure>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_10}
                />
                <Figure.Caption>Chinese</Figure.Caption>
              </Figure>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_11}
                />
                <Figure.Caption>Music</Figure.Caption>
              </Figure>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="figure"
                  src={icon_12}
                />
                <Figure.Caption>Library</Figure.Caption>
              </Figure>
            </Stack>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SchPage;
