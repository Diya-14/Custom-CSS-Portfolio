import React from "react";
import { FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header style={{ background: "#333", padding: "10px 20px" }}>
      <h1 style={{ color: "#ff7eb3" }}>Diya's Portfolio</h1>
      <nav style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <a href="/" style={{ color: "#fff", fontSize: "1.2rem" }}>
          <FaHome /> Home
        </a>
        <a href="/about" style={{ color: "#fff", fontSize: "1.2rem" }}>
          <FaUserAlt /> About
        </a>
        <a href="/contact" style={{ color: "#fff", fontSize: "1.2rem" }}>
          <FaEnvelope /> Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
