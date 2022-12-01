import './style.css'

import ReactDOM from 'react-dom/client'

import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'

import Experience from './Experience.js'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <KeyboardControls
    map={[
      { name: 'forward', keys: ['ArrowUp', 'z'] },
      { name: 'backward', keys: ['ArrowDown', 's'] },
      { name: 'leftward', keys: ['ArrowLeft', 'q'] },
      { name: 'rightward', keys: ['ArrowRight', 'd'] },
      { name: 'jump', keys: ['Space'] },
    ]}
  >
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [2.5, 4, 6],
      }}
    >
      <Experience />
    </Canvas>
  </KeyboardControls>
);