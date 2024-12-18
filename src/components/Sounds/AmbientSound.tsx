"use client";
import React, { useEffect, useRef } from "react";

const AmbientSound = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        (audioRef as any).current.play();
        (audioRef as any).current.volume = 0.08;
      }
    };

    // Agrega un evento para escuchar interacciones del usuario
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keypress", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keypress", handleUserInteraction);
    };
  }, []);
  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="/sounds/Ambient.mp3" type="audio/mp3" />
    </audio>
  );
};

export default AmbientSound;
