import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Todos from "../ToDosPage/Todos";
import ExpenseTracker from "./ExpenseTracker";
import AboutUs from "./AboutUs";
import IntroVideo from "./IntroVideo";

function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Todos />
      <ExpenseTracker />
      <IntroVideo />
      <Footer />
    </>
  );
}

export default Home;
