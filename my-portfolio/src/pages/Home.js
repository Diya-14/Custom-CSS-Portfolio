import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css"; // Create a CSS file specifically for Home page styles.

function Home() {
  return (
    <div>
      <Header />
      <main className="container">
        <div className="intro-section">
          {/* Left Section */}
          <div className="text-content">
            <h1>Welcome to My Portfolio</h1>
            <p>
              Hi, I’m <strong>Diya</strong>, a passionate educator and a tech enthusiast.
              My journey blends the world of teaching and programming. Here, you’ll
              discover my projects, achievements, and the impact I strive to make in the
              world of education and technology.
            </p>
            <p>
              Whether it’s designing interactive learning tools or creating engaging
              lessons, I bring dedication, creativity, and a love for learning to
              everything I do. Let’s embark on this journey together!
            </p>
          </div>

          {/* Right Section */}
          <div className="image-container">
            <img
              src="/IMG-20240122-WA0007.jpg"
              alt="Diya's Profile"
              className="profile-image"
            />
          </div>
        </div>

        <div className="content-section">
          <h2>Core Skills</h2>
          <ul>
            <li>Classroom Management and Lesson Planning</li>
            <li>Programming Languages: HTML, CSS, JavaScript</li>
            <li>Microsoft Office Suite: Word, Excel, PowerPoint</li>
            <li>Problem-Solving and Team Collaboration</li>
          </ul>

          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Calculator App:</strong> A simple, fully functional calculator for
              basic arithmetic operations.{" "}
              <a
                href="https://github.com/Diya-14/calculator-assignment.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </li>
            <li>
              <strong>BMI Calculator:</strong> Calculates Body Mass Index for users.{" "}
              <a
                href="https://github.com/Diya-14/Operators-BMI-calculator-.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
