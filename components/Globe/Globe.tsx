import { useState, useEffect, useRef } from "react";

// Three.js
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

// Types.
type GLTFResult = GLTF & {
  nodes: {
    earth4_blinn1_0: THREE.Mesh;
    earth4_lambert1_0: THREE.Mesh;
  };
  materials: {
    blinn1: THREE.MeshStandardMaterial;
    lambert1: THREE.MeshStandardMaterial;
  };
};

// Globe.tsx
export function Globe(props: JSX.IntrinsicElements["group"]) {
  const ref = useRef<THREE.Group>(null!);
  const { nodes, materials, scene } = useGLTF("/scene.gltf") as GLTFResult;
  const [isLoaded, setIsLoaded] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (scene) setIsLoaded(true);
  }, [scene]);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.05;

    if (isLoaded && opacity < 1) setOpacity((prev) => Math.min(prev + 0.005, 1));

    ref.current.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.Material) {
        child.material.transparent = true;
        child.material.opacity = opacity;
      }
    });
  });

  // Render.
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");
