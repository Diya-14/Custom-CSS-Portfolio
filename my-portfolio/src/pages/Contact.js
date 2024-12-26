import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Header />
      <main className="container">
        <h1>Contact Me</h1>
        <p>Email: <a href="mailto:diyaiqbal346@gmail.com">diyaiqbal346@gmail.com</a></p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/diyaiqbal" target="_blank" rel="noopener noreferrer">
            Diya Iqbal
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/Diya-14" target="_blank" rel="noopener noreferrer">
            Diya-14
          </a>
        </p>

        <h2>Send Me a Message</h2>
        <form style={{ maxWidth: "600px", margin: "auto" }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" style={{ width: "100%", marginBottom: "10px" }} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" style={{ width: "100%", marginBottom: "10px" }} />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" style={{ width: "100%" }}></textarea>

          <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;

