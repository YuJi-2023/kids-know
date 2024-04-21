import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import ToDosPage from "./components/ToDosPage/TodosPage";
import SchPage from "./components/SchPage/SchPage";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<ToDosPage />} />
      <Route path="/weeklyschedule" element={<SchPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
