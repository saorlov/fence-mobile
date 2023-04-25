import React from 'react';
import {
    Button, Center,
    Flex,
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent, PopoverHeader,
    PopoverTrigger
} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import PlaneSizeForm from "./three-components/controls/PlaneSizeForm";
import ColorControls from "./three-components/controls/ColorControls";
import CanvasComponent from "./CanvasComponent";
import SceneContextWrapper from "../context/contextWrappers/SceneContextWrapper";
import FenceOrientation from "./three-components/controls/FenceOrientation";

function AppComponent(props: any) {

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
                            <Flex
                                flexDirection={'column'}
                                gap={5}
                            >
                                <PlaneSizeForm />
                                <FenceOrientation />
                                <ColorControls />
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

            </Flex>
            <Center
                bg='blue.50'
                width={window.innerWidth}
                height={window.innerHeight}
            >
                <CanvasComponent />
            </Center>
        </SceneContextWrapper>
    );
}

export default AppComponent;
