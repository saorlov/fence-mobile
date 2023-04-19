import React, {ChangeEvent, useContext} from 'react';
import {SceneContext} from "../../../context/Contexts";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from '@chakra-ui/react'

function PlaneSizeForm() {

    const ctx = useContext(SceneContext)

    const heightChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        ctx.setHeight(+e.target.value)
    }

    const widthChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        ctx.setWidth(+e.target.value)
    }

    return (
        <div>
            <form >
                <FormControl>
                    <FormLabel>Длина Участка</FormLabel>
                    <Input type='number' value={ctx.planeHeight} onChange={heightChangeHandler} />
                    <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel>Ширина участка</FormLabel>
                    <Input type='number' value={ctx.planeWidth} onChange={widthChangeHandler} />
                    <FormErrorMessage></FormErrorMessage>
                </FormControl>

            </form>
        </div>
    );
}

export default PlaneSizeForm;
