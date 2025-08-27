import React from "react";
import Hero from "../Components/Hero";
import { useEffect, useState } from "react";
import HowItWorks from "../Components/HowItWorks";
import AboutUs from "../Components/AboutUs";
import OurMoto from "../Components/OurMoto";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPosts(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="hero-containter"
      style={{
        opacity: showPosts ? 1 : 0,
        transform: showPosts ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        backgroundColor: "#edf1f4",
        padding: "10px",
        fontSize: "25px",
      }}
    >
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <HowItWorks />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="ourmoto">
        <OurMoto />
      </section>

      <section id="testimonial">
        <Testimonial />
      </section>

    </div>
  );
};

export default Home;
