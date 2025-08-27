import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
