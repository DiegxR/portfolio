import { useViewContext } from "@/lib/context/ViewContext";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { MeshStandardMaterial, TextureLoader } from "three";

const Station = () => {
  const { stationRef: targetRef } = useViewContext();

  const [position, setPosition] = useState([-150, -150, 1000]); // Estado objetivo
  const [currentPosition, setCurrentPosition] = useState([-150, -150, 1000]); // Estado suavizado

  // Función de interpolación lineal
  const lerp = (start: number, end: number, t: number) =>
    start + t * (end - start);

  useEffect(() => {
    const target = targetRef.current;

    // Configuración del Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = 1 - entry.intersectionRatio; // Ratio de visibilidad entre 0 y 1

          // Posiciones objetivo interpoladas linealmente
          const newX = -150; // X permanece constante
          const newY = -150; // Y permanece constante
          const newZ = 1000 + ratio * -980; // De 700 a 50: resta 650 progresivamente

          setPosition([newX, newY, newZ]); // Actualiza posición objetivo
        });
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i * 0.1) } // Thresholds de 0.0 a 1.0
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [targetRef]);

  // Efecto para suavizar el cambio de posición
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => [
        lerp(prev[0], position[0], 0.05), // Interpola X (sin cambio)
        lerp(prev[1], position[1], 0.05), // Interpola Y (sin cambio)
        lerp(prev[2], position[2], 0.05), // Interpola Z (suavizado)
      ]);
    }, 16); // 16 ms para ~60fps

    return () => clearInterval(interval);
  }, [position]);

  const stationRef: any = useRef();
  const { scene: station } = useGLTF("/spaceStation/scene.gltf");
  const [rotation, setRotation] = useState([10, -10, 5]);
  const stationTexture1 = useLoader(
    TextureLoader,
    "/spaceStation/textures/stationTexture1.png"
  );
  const stationTexture2 = useLoader(
    TextureLoader,
    "/spaceStation/textures/stationTexture2.png"
  );
  React.useEffect(() => {
    station.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({
          map: stationTexture1,
          aoMapIntensity: 90,
          opacity: 0,
        });
      }
    });
  }, [station, stationTexture1, stationTexture2]);
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { clientX, clientY } = event;

      // Calcula la posición relativa del mouse respecto al centro de la ventana
      const halfWidth = window.innerWidth / 2;
      const halfHeight = window.innerHeight / 2;

      const x = (clientX - halfWidth) / halfWidth; // Normaliza entre -1 y 1
      const y = (clientY - halfHeight) / halfHeight; // Normaliza entre -1 y 1

      // Calcula la rotación usando un factor
      const rotX = y * Math.PI * 0.5; // Limita el rango de rotación en el eje X
      const rotY = x * Math.PI * 0.5; // Limita el rango de rotación en el eje Y

      // Actualiza la rotación
      setRotation([0, rotX + rotY, 0]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <primitive
      ref={stationRef}
      rotation={rotation}
      position={currentPosition}
      scale={[2, 2, 2]}
      object={station}
    />
  );
};
export default Station;
