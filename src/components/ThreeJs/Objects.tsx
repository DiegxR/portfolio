"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useViewContext } from "@/lib/context/ViewContext";
import Station from "./Objects/Station";
const CustomModel = () => {
  // Cargar el modelo GLTF// Reemplaza con la ruta a tu archivo .glb
  const { viewState } = useViewContext();
  const { scene } = useGLTF("/car/scene.gltf");
  const { scene: earth } = useGLTF("/earth.gltf");
  const texture = useLoader(TextureLoader, "/earthtexture.jpeg");
  const textureOcean = useLoader(TextureLoader, "/oceanDepth.jpeg");
  const earthMask = useLoader(TextureLoader, "/mask.png");
  const clouds = useLoader(TextureLoader, "/clouds.jpeg");
  const car = useLoader(TextureLoader, "/carTexture.png");
  const ref: any = useRef();
 
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001; // Ajusta la velocidad de rotación aquí
    }
  });
  React.useEffect(() => {
    earth.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({
          map: texture,
          bumpMap: earthMask,
          roughnessMap: clouds,
          roughness: 1,
          metalnessMap: textureOcean
        });
      }
    });
  }, [earth, texture, textureOcean, clouds, earthMask, scene]);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001; // Ajusta la velocidad de rotación aquí
    }
  });

  return (
    <>
      <primitive
        rotation={[viewState ? 0.7 : -0.2, Math.PI, 0]}
        object={scene}
        position={[0, viewState ? -0.03 : 0, viewState ? -1.75 : 0]}
        scale={[2, 2, 2]}
      />
      ;
      <primitive
        ref={ref}
        rotation={[-0.5, 5, 0]}
        object={earth}
        position={[0, -8, -35]}
        scale={[15, 15, 15]}
      />
      ;
      {viewState ? (
        <Station/>
      ) : (
        <></>
      )}
    </>
  );
};
const Objects = ({ color, position }: { color: string; position: any }) => {
  const { viewState } = useViewContext();
  return (
    <group>
      <ambientLight intensity={1} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="white"
        castShadow
      />
      <directionalLight position={[!viewState ? 10 : 50,-10, -5]} intensity={5} color="#FFCC33" />
      <CustomModel />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.1} // El brillo mínimo para aplicar el efecto Bloom
          luminanceSmoothing={0.1} // Suavizado del brillo
          intensity={0.1} // Intensidad del Bloom
          kernelSize={5} // Tamaño del kernel para el desenfoque
          blendFunction={BlendFunction.ADD} // Método de mezcla
        />
      </EffectComposer>
    </group>
  );
};

export default Objects;
