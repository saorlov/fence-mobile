import React, {useContext} from 'react';
import {SceneContext} from "../../context/Contexts";
import * as THREE from "three";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

interface PlaneProps {
    rotation?: number[],
    position?: number[]
}

function GroundPlane({rotation, position}: PlaneProps) {

    const ctx = useContext(SceneContext)
    const groundSize = Math.max(ctx.planeHeight, ctx.planeWidth)

    const geometry = new THREE.PlaneGeometry(groundSize + 5, groundSize + 5, 8, 8)
    geometry.setAttribute('uv2', geometry.attributes.uv)

    const groundColorMap = useLoader(TextureLoader, '/textures/ground/Ground_Grass_001_COLOR.jpg')
    groundColorMap.minFilter = THREE.NearestFilter
    groundColorMap.magFilter = THREE.NearestFilter
    groundColorMap.repeat.x = 8
    groundColorMap.repeat.y = 8
    groundColorMap.wrapS = THREE.RepeatWrapping
    groundColorMap.wrapT = THREE.RepeatWrapping

    const groundAOmap = useLoader(TextureLoader, '/textures/ground/Ground_Grass_001_OCC.jpg')
    groundAOmap.repeat.x = 4
    groundAOmap.repeat.y = 4
    groundAOmap.wrapS = THREE.MirroredRepeatWrapping
    groundAOmap.wrapT = THREE.MirroredRepeatWrapping

    const groundDisplacementMap = useLoader(TextureLoader, '/textures/ground/Ground_Grass_001_DISP.PNG');
    groundDisplacementMap.repeat.x = groundSize + 5
    groundDisplacementMap.repeat.y = groundSize + 5
    groundDisplacementMap.wrapS = THREE.MirroredRepeatWrapping
    groundDisplacementMap.wrapT = THREE.MirroredRepeatWrapping

    const groundNormalMap = useLoader(TextureLoader, '/textures/ground/Ground_Grass_001_NORM.jpg')
    // groundNormalMap.repeat.x = 4
    // groundNormalMap.repeat.y = 4
    groundNormalMap.wrapS = THREE.MirroredRepeatWrapping
    groundNormalMap.wrapT = THREE.MirroredRepeatWrapping

    const groundRoughness = useLoader(TextureLoader, '/textures/ground/Ground_Grass_001_ROUGH.jpg')

    const material = new THREE.MeshStandardMaterial({
        map: groundColorMap,
        aoMap: groundAOmap,
        displacementMap: groundDisplacementMap,
        normalMap: groundNormalMap,
        roughnessMap: groundRoughness,
    })
    material.displacementScale = .01

    return (
        <>
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
                material={material}
                geometry={geometry}
            />
        </>
    );
}

export default GroundPlane;
