import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, NotFound, TrucksDashboard, Users } from "@components";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/dashboard" element={<TrucksDashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
