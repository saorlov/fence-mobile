import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {useContext} from "react";
import {SceneContext} from "../../../context/Contexts";

function House(props: any) {

    const ctx = useContext(SceneContext)
    const [groundWidth, groundHeight] = [ctx.planeWidth, ctx.planeHeight]

    const model = useLoader(GLTFLoader, '/models/house/scene.gltf')
    return (
        <>
            <mesh
                position={[-10.4 - groundWidth / 2, 0.2, -11.5 - groundHeight / 2]}
                scale={.025}
            >
                <primitive object={model.scene}/>
            </mesh>
        </>
    );
}

export default House;
