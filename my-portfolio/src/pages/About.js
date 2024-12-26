import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      <main className="container">
        <h1>About Me</h1>
        <p>
          I’m <strong>Diya</strong>, currently pursuing my B.Ed. Hons from the Govt.
          College of Education, affiliated with Karachi University. I have a passion for
          blending teaching and technology to make education interactive and impactful.
        </p>

        <h2>Education</h2>
        <ul>
          <li>
            <strong>B.Ed. Hons:</strong> Current GPA: 3.13 (First Semester), 3.40 (Second
            Semester)
          </li>
          <li>
            <strong>Intermediate in Pre-Medical:</strong> Grade A
          </li>
          <li>
            <strong>Matriculation in Science:</strong> Grade A-One
          </li>
        </ul>

        <h2>My Vision</h2>
        <p>
          My dream is to inspire and empower others through education and technology.
          Whether by developing websites, crafting engaging lessons, or innovating
          learning tools, I am determined to create a lasting impact.
        </p>

        <h2>Achievements</h2>
        <ul>
          <li>Earned over 30 certificates in academics and extracurricular activities.</li>
          <li>Excelled in public speaking, sports, and quiz competitions.</li>
          <li>Received multiple awards for teaching excellence and dedication.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default About;
