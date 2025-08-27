import React from "react";
import motoImg from "/public/motoImg.jpg"

export default function OurMoto() {
  return (
    <div className="fade-in"
      style={{
         backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${motoImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "8rem 1rem ",
        textAlign: "center",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "0.5rem",
        }}
      >
        Our Moto
      </h2>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          maxWidth: "90%",
          lineHeight: "1.4",
        }}
      >
        Committed to Your Recovery, 
        Dedicated to Your Health
      </p>
    </div>
  );
}
