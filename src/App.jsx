import React from "react";
import profilePic from "./assets/profile.jpg"; // Bild-Import aus src/assets

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <img
        src={profilePic}
        alt="Profilbild Alexis Stanimiroudis"
        style={{
          width: "32px",
          height: "32px",
          border: "8px solid green",
          borderRadius: "50%",
          objectFit: "cover",
          display: "block"
        }}
      />
      <h1 className="mt-4 text-3xl font-bold">TEST – Alexis Stanimiroudis</h1>
    </div>
  );
}

