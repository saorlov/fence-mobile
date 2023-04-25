import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {useContext} from "react";
import {SceneContext} from "../../../context/Contexts";
import Bush from "./Bush";

function Bushes(props: any) {

    const ctx = useContext(SceneContext)
    const [groundWidth, groundHeight] = [ctx.planeWidth, ctx.planeHeight]

    const model = useLoader(GLTFLoader, '/models/bushes/scene.gltf')

    const points = []
    for (let i = 0; i < 10 * Math.max(groundHeight, groundWidth); i++) {

        let posX = (Math.random() - .5) * (groundWidth - 2.5)
        let posY = (Math.random() - .5) * (groundHeight - 2.5)

        if (posX < -(groundWidth / 2 - 13) && posY < -(groundHeight / 2 - 11)) {
            if (Math.random() > .5) posX *= -1
            else posY *= -1
        }

        points.push({
            x: posX,
            y: 0,
            z: posY,
            model: model.scene.clone(true)
        })
    }


    return (
        <>
            {
                points.map((el, i) => {
                    return (
                        <Bush position={[el.x, el.y, el.z]} model={el.model} />
                    )
                })
            }
        </>
    );
}

export default Bushes;
