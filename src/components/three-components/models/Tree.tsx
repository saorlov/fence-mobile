import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {useContext} from "react";
import {SceneContext} from "../../../context/Contexts";

function Tree(props: any) {

    const ctx = useContext(SceneContext)
    const [groundWidth, groundHeight] = [ctx.planeWidth, ctx.planeHeight]

    const model = useLoader(GLTFLoader, '/models/tree/scene.gltf')

    const points = []
    for (let i = 0; i < Math.max(groundHeight, groundWidth) / 10; i++) {

        let posX = (Math.random() - .5) * (groundWidth - 5)
        let posY = (Math.random() - .5) * (groundHeight - 5)

        if (posX < -(groundWidth / 2 - 17) && posY < -(groundHeight / 2 - 17)) {
            if (Math.random() > .5) posX *= -1
            else posY *= -1
        }

        points.push({
            x: posX,
            y: 0,
            z: posY,
            model: model.scene.clone()
        })
    }


    return (
        <>
            {
                points.map((el, i) => {
                    return (
                        <mesh
                            key={i}
                            position={[el.x, el.y, el.z]}
                            scale={Math.random() * .2 + .5}
                        >
                            <primitive object={el.model}/>
                        </mesh>
                    )
                })
            }
        </>
    );
}

export default Tree;
