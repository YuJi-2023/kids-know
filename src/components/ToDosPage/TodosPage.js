import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Todos from "./Todos";
import TodosFeature from "./TodosFeature";
import TodoIdeas from "./TodoIdeas";
import TodoItems from "./TodoItems";

function ToDosPage() {
  return (
    <>
      <Header />
      <Todos />
      <TodoItems />
      <TodosFeature />
      <TodoIdeas />
      <Footer />
    </>
  );
}

export default ToDosPage;
