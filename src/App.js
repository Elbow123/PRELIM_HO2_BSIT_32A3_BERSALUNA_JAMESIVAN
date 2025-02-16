import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
