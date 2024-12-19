"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, Cone } from "@react-three/drei";
import * as THREE from "three";
import { useViewContext } from "@/lib/context/ViewContext";

const CursorTrail = () => {
  const [points, setPoints] = useState<THREE.Vector3[]>(() => [
    new THREE.Vector3(0, 0, 0),
  ]);
  const maxPoints = 50; // Número máximo de puntos en la estela
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const { viewport } = useThree();
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    setPoints((prevPoints) => {
      const worldX = (mouseRef.current.x * viewport.width) / 1;
      const worldY = (mouseRef.current.y * viewport.height) / 1;
      const newPoint = new THREE.Vector3(worldX, worldY, 0);

      const lastPoint = prevPoints[prevPoints.length - 1];
      const interpolatedPoints = interpolatePoints(lastPoint, newPoint, 5);

      let newPoints = [...prevPoints, ...interpolatedPoints];

      if (newPoints.length > maxPoints) {
        newPoints = newPoints.slice(newPoints.length - maxPoints);
      }
      return newPoints;
    });
  });

  const interpolatePoints = (
    start: THREE.Vector3,
    end: THREE.Vector3,
    steps: number
  ) => {
    const points = [];
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      points.push(new THREE.Vector3().lerpVectors(start, end, t));
    }
    return points;
  };

  return <Line points={points} color="white" lineWidth={5} renderOrder={3} />;
};

const ThreeScene = ({ children }: { children: React.ReactNode }) => {
  const { viewState } = useViewContext();
  const ref = useRef();
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {viewState && <CursorTrail />}
      {children}
    </Canvas>
  );
};

export default ThreeScene;
