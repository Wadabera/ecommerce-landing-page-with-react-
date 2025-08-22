
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Testimonial from "./Components/Testmonial";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Testimonial />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

