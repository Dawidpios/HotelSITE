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
        
          <Route path="/HotelSITE/" element={<Home />}/>
<<<<<<< HEAD
          <Route  path="/HotelSITE/myprofil" element={<MyProfil />} />
=======
          <Route  path="/myprofil" element={<MyProfil />} />
>>>>>>> 0fc59dd1dcbc75bc43ed335c0b17fd529dd9ffce
        </Routes>
        
      </Router>
      </AppProvider>

  );
}

export default App;
