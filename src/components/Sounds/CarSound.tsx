import React from "react";

const CarSound = () => {
  return (
    <audio autoPlay>
      <source src="/sounds/carSound.mp3" type="audio/mp3" />
    </audio>
  );
};

export default CarSound;
