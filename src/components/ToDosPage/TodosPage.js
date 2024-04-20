import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Todos from "./Todos";
import TodosFeature from "./TodosFeature";

function ToDosPage() {
  return (
    <>
      <Header />
      <Todos />
      <TodosFeature />
      <Footer />
    </>
  );
}

export default ToDosPage;
