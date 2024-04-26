import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Todos from "../ToDosPage/Todos";
// import ExpenseTracker from "./ExpenseTracker";
import AboutUs from "./AboutUs";
import IntroVideo from "./IntroVideo";
import Routine from "./Routine";

function Home() {
  return (
    <>
      <Header />
      <Routine />
      <Todos />
      <AboutUs />
      {/* <ExpenseTracker /> */}
      <IntroVideo />
      <Footer />
    </>
  );
}

export default Home;
