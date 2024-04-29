import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import TodosForm from "../ToDosPage/TodosForm";
import AboutUs from "./AboutUs";
import IntroVideo from "./IntroVideo";
import Routine from "./Routine";

function Home() {
  return (
    <>
      <Header />
      <Routine />
      <TodosForm title="Daily Todos"/>
      <AboutUs />
      <IntroVideo />
      <Footer />
    </>
  );
}

export default Home;
