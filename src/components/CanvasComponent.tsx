import {Center, Flex} from '@chakra-ui/react'
import React from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import GroundPlane from "./three-components/GroundPlane";
import SceneContextWrapper from "../context/contextWrappers/SceneContextWrapper";
import PlaneSizeForm from "./three-components/controls/PlaneSizeForm";
import Fence from "./three-components/fence/Fence";
import ColorControls from "./three-components/controls/ColorControls";
import Cam from "./three-components/Cam";
import House from "./three-components/models/House";
import Tree from "./three-components/models/Tree";
import Bushes from "./three-components/models/Bushes";



function CanvasComponent() {

    return (
        <SceneContextWrapper>
            <Center bg='blue.50' margin={'auto'} width={'600px'} height={'600px'}>
                <Flex
                    flexDirection={'column'}
                    gap={'10px'}
                >
                    <PlaneSizeForm />
                    <ColorControls />
                </Flex>
                <Canvas>
                    <pointLight position={[50, 15, 50]} />
                    <pointLight position={[-50, 15, -50]} />
                    <Fence />
                    <House />
                    <Tree />
                    <Bushes />
                    <GroundPlane />
                    <OrbitControls />
                    <axesHelper args={[5]} />
                    <Cam />
                </Canvas>
            </Center>
        </SceneContextWrapper>
    );
}

export default CanvasComponent;
