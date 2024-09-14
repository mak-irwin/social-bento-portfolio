import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

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

export function Globe(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/scene.gltf") as GLTFResult;
  const ref = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.05;
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
