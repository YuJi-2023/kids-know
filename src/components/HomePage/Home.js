import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Todos from "./Todos";
import ExpenseTracker from "./ExpenseTracker";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Todos />
      <ExpenseTracker />
      <Footer />
    </>
  );
}

export default Home;
