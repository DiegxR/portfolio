import { useViewContext } from "@/lib/context/ViewContext";
import { useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { MeshStandardMaterial, TextureLoader } from "three";

const Satellite = () => {
  const { stationRef: targetRef } = useViewContext();

  const [position, setPosition] = useState([400, -50, 1000]); // Estado objetivo
  const [currentPosition, setCurrentPosition] = useState([400, -50, 1000]); // Estado suavizado

  // Función de interpolación lineal
  const lerp = (start: number, end: number, t: number) =>
    start + t * (end - start);
  useEffect(() => {}, [currentPosition]);
  useEffect(() => {
    const target = targetRef.current;

    // Configuración del Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = 1 - entry.intersectionRatio; // Ratio de visibilidad entre 0 y 1

          // Posiciones objetivo interpoladas linealmente
          const newX = 400; // X permanece constante
          const newY = -100; // Y permanece constante
          const newZ = 1000 + ratio * -600; // De 700 a 50: resta 650 progresivamente

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

  const satelliteRef: any = useRef();
  const { scene: satellite } = useGLTF("/satelite/scene.gltf");
  const [rotation, setRotation] = useState([20, -20, 5]);
  const stationTexture1 = useLoader(
    TextureLoader,
    "/satelite/textures/satelliteTexture1.png"
  );
  const stationTexture2 = useLoader(
    TextureLoader,
    "/satelite/textures/satelliteTexture2.png"
  );
  const stationTexture3 = useLoader(
    TextureLoader,
    "/satelite/textures/satelliteTexture3.png"
  );
  React.useEffect(() => {
    satellite.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({
          map: stationTexture1,
          aoMapIntensity: 90,
          alphaMap: stationTexture2,
          envMap: stationTexture3,
          blendColor: "black",
          opacity: 0,
        });
      }
    });
  }, [satellite, stationTexture1, stationTexture2, stationTexture3]);
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { clientX, clientY } = event;

      // Calcula la posición relativa del mouse respecto al centro de la ventana
      const halfWidth = window.innerWidth / 2;
      const halfHeight = window.innerHeight / 2;

      const x = (clientX - halfWidth) / halfWidth; // Normaliza entre -1 y 1
      const y = (clientY - halfHeight) / halfHeight; // Normaliza entre -1 y 1

      // Calcula la rotación usando un factor
      const rotX = y * Math.PI * 0.008; // Limita el rango de rotación en el eje X
      const rotY = x * Math.PI * 0.003; // Limita el rango de rotación en el eje Y

      // Actualiza la rotación
      setRotation([6, 9, rotX + rotY + rotation[2]]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotation]);

  return (
    <primitive
      ref={satelliteRef}
      rotation={rotation}
      position={currentPosition}
      scale={[3, 3, 3]}
      object={satellite}
    />
  );
};
export default Satellite;
