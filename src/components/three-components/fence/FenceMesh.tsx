import React from 'react';
import {FenceProps} from "../../../utils/types";
import * as THREE from 'three'
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";



function FenceMesh({position, rotation, color, args}: FenceProps) {

    let wallLength = args[0]
    const points = []
    if (!rotation) {
        while (wallLength > 3.5) {
            wallLength -= 3.5
            points.push({
                x: wallLength > 0 ? wallLength - args[0] / 2 : -args[0] / 2,
                y: .85,
                z: position[2] >= 0 ? position[2] - .2 : position[2] + .2,
            })
        }
    } else {
        while (wallLength > 3.5) {
            wallLength -= 3.5
            points.push({
                x: position[0] >= 0 ? position[0] - .2 : position[0] + .2,
                y: .85,
                z: wallLength > 0 ? wallLength - args[0] / 2 : -args[0] / 2,
            })
        }
    }

    const geometry = new THREE.PlaneGeometry(...args)
    geometry.setAttribute('uv2', geometry.attributes.uv)

    const fenceColorMap = useLoader(TextureLoader, '/textures/fence/CorrugatedMetalPanel02_1K_BaseColor.png')
    fenceColorMap.repeat.x = args[0]
    fenceColorMap.minFilter = THREE.NearestFilter
    fenceColorMap.wrapS = THREE.MirroredRepeatWrapping
    fenceColorMap.wrapT = THREE.MirroredRepeatWrapping

    const fenceAOmap = useLoader(TextureLoader, '/textures/fence/CorrugatedMetalPanel02_1K_AO.png')
    fenceAOmap.repeat.x = args[0]
    fenceAOmap.minFilter = THREE.NearestFilter
    fenceAOmap.wrapS = THREE.MirroredRepeatWrapping
    fenceAOmap.wrapT = THREE.MirroredRepeatWrapping

    const fenceDisplacementMap = useLoader(TextureLoader, '/textures/fence/CorrugatedMetalPanel02_1K_Height.png');
    fenceDisplacementMap.repeat.set(64, 64)
    fenceDisplacementMap.wrapS = THREE.RepeatWrapping
    fenceDisplacementMap.wrapT = THREE.RepeatWrapping

    const fenceNormalMap = useLoader(TextureLoader, '/textures/fence/CorrugatedMetalPanel02_1K_Normal.png')
    fenceNormalMap.repeat.x = args[0]
    fenceNormalMap.wrapS = THREE.MirroredRepeatWrapping
    fenceNormalMap.wrapT = THREE.MirroredRepeatWrapping

    const fenceMetalness = useLoader(TextureLoader, '/textures/fence/MetalCorrugatedIronSheet002_METALNESS_2K_METALNESS.jpg')
    fenceMetalness.repeat.x = args[0]
    fenceMetalness.wrapS = THREE.MirroredRepeatWrapping
    fenceMetalness.wrapT = THREE.MirroredRepeatWrapping

    const fenceRoughness = useLoader(TextureLoader, '/textures/fence/CorrugatedMetalPanel02_1K_Roughness.png')
    fenceRoughness.repeat.x = args[0]
    fenceRoughness.wrapS = THREE.MirroredRepeatWrapping
    fenceRoughness.wrapT = THREE.MirroredRepeatWrapping

    const material = new THREE.MeshStandardMaterial({
        color: color,
        side: THREE.DoubleSide,
        map: fenceColorMap,
        aoMap: fenceAOmap,
        displacementMap: fenceDisplacementMap,
        normalMap: fenceNormalMap,
        metalnessMap: fenceMetalness,
        roughnessMap: fenceRoughness,
    })
    material.displacementScale = .1

    return (
        <>
            <mesh
                position={position}
                rotation={rotation}
                material={material}
                geometry={geometry}
            />
            <mesh
                position={[position[0] < 0 ? position[0] + .2 : position[0] - .2, position[1] * .5, position[2] < 0 ? position[2] + .2 : position[2] - .2]}
                rotation={rotation}
            >
                <meshStandardMaterial color={'black'} />
                <boxGeometry args={[args[0] - .5, .2, .2, 8, 8, 8]} />
            </mesh>
            <mesh
                position={[position[0] < 0 ? position[0] + .2 : position[0] - .2, position[1] * 1.20, position[2] < 0 ? position[2] + .2 : position[2] - .2]}
                rotation={rotation}
            >
                <meshStandardMaterial color={'black'} />
                <boxGeometry args={[args[0] - .5, .2, .2, 8, 8, 8]} />
            </mesh>
            {
                points.map((el, i) => {
                    return (
                        <mesh
                            key={i}
                            position={[el.x, el.y, el.z]}
                        >
                            <meshStandardMaterial color={'black'} />
                            <boxGeometry args={[.2, 1.7, .2, 4, 4, 4]} />
                        </mesh>
                    )
                })
            }
        </>
    );
}

export default FenceMesh;
