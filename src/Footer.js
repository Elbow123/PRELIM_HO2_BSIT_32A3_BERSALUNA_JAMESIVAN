import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-3">
      <p>
        &copy; 2024 My CV |{" "}
        <a href="#home" className="text-white">
          Home
        </a>{" "}
        |{" "}
        <a href="#about" className="text-white">
          About
        </a>{" "}
        |{" "}
        <a href="#contact" className="text-white">
          Contact
        </a>
      </p>
      <a href="#home" className="btn btn-light btn-sm mt-2">
        Back to Top
      </a>
    </footer>
  );
};

export default Footer;
