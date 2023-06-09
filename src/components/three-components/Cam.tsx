import React, {useContext, useEffect, useRef} from "react";
import * as THREE from "three";
import {useFrame, useThree} from "@react-three/fiber";
import {SceneContext} from "../../context/Contexts";

const Cam = () => {
    const ref = useRef<THREE.PerspectiveCamera & {manual?: boolean}>(null);
    const set = useThree((state) => state.set);

    const ctx = useContext(SceneContext)
    const maxDistance = Math.max(ctx.planeWidth, ctx.planeHeight)
    const dynamicCameraPosition: [
        x: number, y: number, z: number
    ] = [maxDistance, maxDistance * .5, maxDistance]

    useEffect(() => {
        if (ref.current) set({ camera: ref.current })
    }, [ctx.planeWidth, ctx.planeHeight, set]);
    useFrame(() => {
        if (ref.current) ref.current.updateMatrixWorld()
    });

    return <perspectiveCamera ref={ref} aspect={window.innerWidth / window.innerHeight} fov={75} near={1} far={250} position={dynamicCameraPosition} />;
};

export default Cam
