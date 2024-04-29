import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import ToDosPage from "./components/ToDosPage/TodosPage";
import SchPage from "./components/SchPage/SchPage";
import ExpenseTrackerPage from "./components/ExpenseTrackerPage/ExpenseTrackerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="index.html" element={<Home />} />
        <Route path="index.html/todos" element={<ToDosPage />} />
        <Route path="index.html/myschedule" element={<SchPage />} />
        <Route
          path="index.html/expensetracker"
          element={<ExpenseTrackerPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
