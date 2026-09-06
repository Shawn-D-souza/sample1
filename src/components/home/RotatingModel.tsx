import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function TubModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Load the generated label texture
  const texture = useTexture('/lable.jpeg');
  // Adjust texture mapping so it wraps around nicely
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1, 1);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.4;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Tub Body */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 4, 64]} />
        <meshStandardMaterial color="#111111" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Cap Neck */}
      <mesh position={[0, 1.6, 0]}>
        <cylinderGeometry args={[2.0, 2.2, 0.4, 64]} />
        <meshStandardMaterial color="#111111" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Tub Cap/Lid */}
      <mesh position={[0, 1.9, 0]}>
        <cylinderGeometry args={[2.3, 2.3, 0.6, 64]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Label wrapped around the body */}
      <mesh position={[0, -0.5, 0]}>
        {/* Slightly larger radius to sit on top of the tub body without z-fighting */}
        <cylinderGeometry args={[2.21, 2.21, 3.5, 64]} />
        <meshStandardMaterial map={texture} roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  );
}

export function RotatingModel() {
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
      
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
        <Suspense fallback={null}>
          <TubModel />
        </Suspense>
      </Float>
    </>
  );
}
