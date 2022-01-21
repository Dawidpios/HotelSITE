import React from "react";
import "../styles/App.css";
import MyProfil from "./MyProfil";
import Home from "./Home";
import history from "./history";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AppProvider from "../context/AppContext";

function App() {
  return (
    <AppProvider>
      <Router history={history}>
           
        <Routes>
        
          <Route path="/" element={<Home />}/>
          <Route  path="myprofil//" element={<MyProfil />} />
        </Routes>
        
      </Router>
      </AppProvider>

  );
}

export default App;
