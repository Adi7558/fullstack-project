import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerRouters from './customer/components/Routers/CustomerRouters.jsx'
function App() {
  return (
    <div>

      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>

    </div>
  );
}

export default App;
