import React, {useContext} from 'react';
import Fence from "./three-components/fence/Fence";
import House from "./three-components/models/House";
import Tree from "./three-components/models/Tree";
import Bushes from "./three-components/models/Bushes";
import GroundPlane from "./three-components/GroundPlane";
import {SceneContext} from "../context/Contexts";

function Meshes(props: any) {

    const ctx = useContext(SceneContext)
    const width = ctx.planeWidth
    const length = ctx.planeHeight
    const planeEnoughForPlants = width > 35 && length > 35
    const planeEnoughForHouse = width > 15 && length > 15

    return (
        <group>
            <Fence />
            {
                planeEnoughForHouse && <House />
            }
            {
                planeEnoughForPlants &&
                <>
                    <Tree />
                    <Bushes />
                </>
            }
            <GroundPlane />
        </group>
    );
}

export default Meshes;
