'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useProgress } from '@react-three/drei';
import { Suspense } from 'react';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% loaded</Html>;
}

export default function ARViewer() {
  const { scene } = useGLTF('/assets/models/dna_gltf/scene.gltf'); // Ensure correct path to model

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas>
        <ambientLight />
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <primitive object={scene} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/assets/models/dna_gltf/scene.gltf');
