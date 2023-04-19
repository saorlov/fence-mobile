import React, {useContext} from 'react';
import {SceneContext} from "../../../context/Contexts";
import FenceMesh from "./FenceMesh";

function Fence() {

    const ctx = useContext(SceneContext)

    const fenceColor = ctx.color
    const fenceWidth = ctx.planeWidth
    const fenceHeight = ctx.planeHeight
    const wallHeight = 2.5

    const points = [
        { x: fenceWidth / 2 - .15, y: 1, z: fenceHeight / 2 - .15 },
        { x: -fenceWidth / 2 + .15, y: 1, z: fenceHeight / 2 - .15 },
        { x: fenceWidth / 2 - .15, y: 1, z: -fenceHeight / 2 + .15 },
        { x: -fenceWidth / 2 + .15, y: 1, z: -fenceHeight / 2 + .15 },
    ]

    return (
        <>
            <FenceMesh
                args={[fenceHeight, wallHeight, 32, 32]}
                color={fenceColor}
                position={[fenceWidth / 2, wallHeight / 2, 0]}
                rotation={[0, -Math.PI / 2, 0]}
            />
            <FenceMesh
                args={[fenceHeight, wallHeight, 32, 32]}
                color={fenceColor}
                position={[-fenceWidth / 2, wallHeight / 2, 0]}
                rotation={[0, Math.PI / 2, 0]}
            />
            <FenceMesh
                args={[fenceWidth, wallHeight, 32, 32]}
                color={fenceColor}
                position={[0, wallHeight / 2, fenceHeight / 2]}
            />
            <FenceMesh
                args={[fenceWidth, wallHeight, 32, 32]}
                color={fenceColor}
                position={[0, wallHeight / 2, -fenceHeight / 2]}
            />
            {
                points.map((el, i) => {
                    return (
                        <mesh
                            key={i}
                            position={[el.x, el.y, el.z]}
                        >
                            <meshStandardMaterial color={'black'} />
                            <boxGeometry args={[.2, 2, .2, 32, 32, 32]} />
                        </mesh>
                    )
                })
            }
        </>
    );
}

export default Fence;
