import React, { Suspense } from 'react';
import './App.css';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import circleImg from './assets/circle.png';

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  return (
    <Points>
      <bufferGeometry attach={geometry}>

      </bufferGeometry>
      <pointsMaterial 
        attach={material} 
        map={imgTex}
        color={0x00AAFF}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </Points>
  )
}

function AnimationCanvas() {
  return (
    <Canvas 
      colotManagement={false} 
      camera={{ position: [100, 10, 0], fov:75 }} 
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  )
}

function App() {
    return (
          <div className="anim">
            <Suspense fallback={<div>Loading ...</div>}>
              <AnimationCanvas />
            </Suspense>
          </div>
      );
}

export default App;
