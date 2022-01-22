import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MyProfil from "./MyProfil";
import Home from "./Home";

import AppProvider from "../context/AppContext";

import "../styles/App.css";

function App() {
  return (
    <AppProvider>
      <Router >
           
        <Routes>
        
          <Route path="/HotelSITE" element={<Home />}/>
          <Route  path="/myprofil" element={<MyProfil />} />

        </Routes>
        
      </Router>
      </AppProvider>

  );
}

export default App;
