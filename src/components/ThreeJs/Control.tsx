"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useViewContext } from "@/lib/context/ViewContext";

const Control = () => {
  const { viewState, transition } = useViewContext();
  const { camera } = useThree();
  const controlsRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [autorotate, setAutorotate] = useState(false);
  const [zoom, setZoom] = useState(15); // Nuevo estado para el zoom
useEffect(() => {
  setZoom(28)
}, [])

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({
        x: (ev.clientX / window.innerWidth) * 2 - 1,
        y: -(ev.clientY / window.innerHeight) * 2 + 1,
      });
    };

    const handleWheel = (ev) => {
      ev.preventDefault();
      setZoom((prevZoom) => {
        const newZoom = prevZoom + ev.deltaY * 0.03;
        return Math.max(5, Math.min(newZoom, 45)); // Limita el zoom entre 5 y 50
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const handleAutorotate = () => {
      if (!viewState && !transition ) {
        setAutorotate(!autorotate);
      }
    };
    window.addEventListener("click", handleAutorotate);
    return () => {
      window.removeEventListener("click", handleAutorotate);
    };
  }, [autorotate, viewState, transition]);

  useEffect(() => {
    if (controlsRef.current && !viewState) {
      const { x, y } = mousePosition;
      camera.position.x = x * zoom;
      camera.position.z = Math.cos(x) * zoom;
      camera.position.y = y * -zoom;
      camera.lookAt(0, 0, 0);
    }
    if (viewState) {
       camera.position.x = 0; // Mover un poco a la derecha
      camera.position.y = 1; // Subir un poco la posición vertical
      camera.position.z = -1.6;
    }
  }, [mousePosition, camera, zoom, viewState]);

  return (
    <>
      <OrbitControls
        ref={!autorotate && !viewState ? controlsRef : undefined}
        enableZoom={false} // Desactivamos el zoom nativo de OrbitControls
        enablePan={false}
        enableRotate={false}
        autoRotateSpeed={2}
        minZoom={100}
        zoomSpeed={0.1}
        autoRotate={autorotate && !viewState && !transition}
      />
      <Stars
        radius={3}
        depth={55}
        factor={1}
        fade
        count={8000}
        speed={viewState ? 2 : 1}
      />
    </>
  );
};

export default Control;
