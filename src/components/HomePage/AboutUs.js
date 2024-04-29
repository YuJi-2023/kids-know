import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide_1 from "../../assests/HomePageSlides/slide_1.jpg";
import slide_2 from "../../assests/HomePageSlides/slide_2.jpg";
import slide_3 from "../../assests/HomePageSlides/slide_3.jpg";
import { Container, Row, Col } from "react-bootstrap";
const AboutUs = () => {
  return (
    <>
      <Container className="d-block my-5" fluid>
        <Row className="justify-content-md-center">
          <Col lg="8" className="bg-primary px-5">
            <Carousel className="py-5">
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src={slide_1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Self-guided Learning</h3>
                  <p>
                    Foster independence, curiosity, and a love for life-long
                    learning.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src={slide_2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>A Good Learner</h3>
                  <p>
                    Develop into a well-rounded individual who is prepared for
                    future challenges and opportunities.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src={slide_3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Be Responsible</h3>
                  <p>
                    Take responsibility for own learning, managing time
                    effectively, and seeking help when needed.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
