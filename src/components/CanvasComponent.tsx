import {Center, Flex} from '@chakra-ui/react'
import React, {useContext, useEffect} from 'react'
import {Canvas, useThree} from '@react-three/fiber'
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
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {SceneContext} from "../context/Contexts";



function CanvasComponent() {

    return (
        <SceneContextWrapper>
            <Flex
                flexDirection={'column'}
                position={'absolute'}
                inset={0}
                zIndex={1}
                paddingX={10}
                paddingTop={5}
                maxHeight={'100px'}
            >
                <Popover>
                    <PopoverTrigger>
                        <Button rightIcon={<ChevronDownIcon />}>
                            Опции
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Параметры</PopoverHeader>
                        <PopoverBody>
                            <PlaneSizeForm />
                            <ColorControls />
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

            </Flex>
            <Center
                bg='blue.50'
                margin={'auto'}
                width={window.innerWidth}
                height={window.innerWidth}
                position={'relative'}
            >

                <Canvas>
                    <Cam />
                    <pointLight position={[50, 15, 50]} />
                    <pointLight position={[-50, 15, -50]} />
                    <Fence />
                    <House />
                    <Tree />
                    <Bushes />
                    <GroundPlane />
                    <OrbitControls />
                    {/*<axesHelper args={[5]} />*/}
                </Canvas>
            </Center>
        </SceneContextWrapper>
    );
}

export default CanvasComponent;
