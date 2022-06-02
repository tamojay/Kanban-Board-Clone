import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";
import "./index.scss";

export default function App() {
 
  return (
    <div className="custom-scroll">  
      <Navbar/>
      <Home/>
    </div>
  );
}