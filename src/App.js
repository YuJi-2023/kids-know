import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import ToDosPage from "./components/ToDosPage/TodosPage";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<ToDosPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
