import React from "react";
import { Route, Routes } from "react-router-dom";
import  "./App.css";
import Home from "./pages/Home";
import Header from "./pages/Header";

export const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Header" element={<Header/>}/> 
      </Routes>
    </div>
  )
    }
export default App;
