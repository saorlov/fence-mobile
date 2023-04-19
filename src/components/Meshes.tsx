import React from 'react';
import Fence from "./three-components/fence/Fence";
import House from "./three-components/models/House";
import Tree from "./three-components/models/Tree";
import Bushes from "./three-components/models/Bushes";
import GroundPlane from "./three-components/GroundPlane";

function Meshes(props: any) {

    return (
        <group>
            <Fence />
            <House />
            <Tree />
            <Bushes />
            <GroundPlane />
        </group>
    );
}

export default Meshes;
