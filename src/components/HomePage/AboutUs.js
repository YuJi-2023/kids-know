import React from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import slide_1 from "../../assests/HomePageSlides/slide_1.jpg";
import slide_2 from "../../assests/HomePageSlides/slide_2.jpg";
import { Container } from "react-bootstrap";
const AboutUs = () => {
  return (
    <>
      <Container className="bg-primary px-5 d-block w-50" fluid>
        <Carousel className="py-5">
          <Carousel.Item>
            <img className="d-block w-100 rounded" src={slide_1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 rounded" src={slide_2} alt="First slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default AboutUs;
