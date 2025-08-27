import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
// import Reg from './components/Reg'
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from './Components/AboutUs'
// import Contact from './components/Contact'
import { AnimatePresence } from 'framer-motion';
import Testimonial from "./Components/Testimonial";
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
