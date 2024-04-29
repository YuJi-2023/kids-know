import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import TodosForm from "./TodosForm";
import TodosFeature from "./TodosFeature";
import TodoIdeas from "./TodosIdeas";
import TodoItems from "./TodosItems";

function ToDosPage() {
  return (
    <>
      <Header />
      <TodosForm title="Creat a Todo List Today!" />
      <TodoItems />
      <TodosFeature />
      <TodoIdeas />
      <Footer />
    </>
  );
}

export default ToDosPage;
