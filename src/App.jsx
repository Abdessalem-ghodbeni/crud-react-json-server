import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpEdit from "./EmpEdit";
import EmpDetail from "./EmpDetail";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>React JS CRUD Opertations</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<EmpListing />} />
            <Route path="/employee/create" element={<EmpCreate />}></Route>

            <Route
              path="/employee/detail/:empid"
              element={<EmpDetail />}
            ></Route>
            <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
