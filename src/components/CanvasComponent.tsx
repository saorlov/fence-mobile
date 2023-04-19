import React from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import Meshes from "./Meshes";

function CanvasComponent() {
    return (
        <Canvas>
            <PerspectiveCamera makeDefault fov={45} position={[40, 15, 40]} near={1} far={500} />
            <pointLight position={[50, 15, 50]} />
            <pointLight position={[-50, 15, -50]} />
            <Meshes />
            <OrbitControls />
        </Canvas>
    )
}

export default CanvasComponent;
