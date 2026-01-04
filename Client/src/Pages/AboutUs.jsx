import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Paw’nHoof</h1>

      <p className="about-tagline">
        A community platform built to care, connect, and protect animals.
      </p>

      <div className="about-section">
        <h2>🌱 Our Mission</h2>
        <p>
          Paw’nHoof aims to connect animal lovers, feeders, rescuers, and adopters
          to support domestic animals like dogs, cats, cows, goats, and sheep.
        </p>
      </div>

      <div className="about-section">
        <h2>🐾 What We Do</h2>
        <ul>
          <li>Enable animal donation and adoption</li>
          <li>Support local feed centers</li>
          <li>Help find lost pets</li>
          <li>Build caring communities</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>🤝 Why Paw’nHoof</h2>
        <p>
          Because every animal deserves care, safety, and love — and every human
          deserves a simple way to help.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
