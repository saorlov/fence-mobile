import React, {ChangeEvent, useContext, useRef, useState} from 'react';
import {SceneContext} from "../../../context/Contexts";
import {debounce} from 'lodash'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from '@chakra-ui/react'

function PlaneSizeForm() {

    const ctx = useContext(SceneContext)
    const [length, setLength] = useState(30)
    const [width, setWidth] = useState(30)
    const [lengthError, setLengthError] = useState(false)
    const [widthError, setWidthError] = useState(false)
    const debouncedUpdate = useRef(
        debounce(async (length: number, width: number) => {

            let l = length
            let w = width

            if (length < 5 || length > 300) {
                setWidthError(true)
                l = length < 5 ? 5 : 300
            }

            if (width < 5 || width > 300) {
                setWidthError(true)
                w = width < 5 ? 5 : 300
            }

            setLength(l)
            ctx.setHeight(l)
            setWidth(w)
            ctx.setWidth(w)

        }, 3000)
    ).current

    const heightChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        setLengthError(false)

        let eLength = Number(e.target.value)

        if (isNaN(eLength)) {
            setLengthError(true)
            return
        }

        setLength(eLength)

        debouncedUpdate(eLength, width)
    }

    const widthChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        setWidthError(false)

        let eWidth = Number(e.target.value)

        if (isNaN(eWidth)) {
            setWidthError(true)
            return
        }

        setWidth(eWidth)

        debouncedUpdate(length, eWidth)
    }

    return (
        <div>
            <form >
                <FormControl>
                    <FormLabel>Длина Участка</FormLabel>
                    <Input type='text' value={length} onChange={heightChangeHandler} />
                    {lengthError && <FormErrorMessage>Укажите длину от 5м до 300м</FormErrorMessage>}
                </FormControl>
                <FormControl>
                    <FormLabel>Ширина участка</FormLabel>
                    <Input type='text' value={width} onChange={widthChangeHandler} />
                    {widthError && <FormErrorMessage>Укажите длину от 5м до 300м</FormErrorMessage>}
                </FormControl>

            </form>
        </div>
    );
}

export default PlaneSizeForm;
