import React, {ChangeEvent, useContext} from 'react';
import {SceneContext} from "../../../context/Contexts";
import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react'

function ColorControls() {

    const ctx = useContext(SceneContext)

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        ctx.setColor(e.target.value)
    }

    return (
        <div>
            <form action="src/components/three-components/controls/PlaneSizeForm">
                <FormControl>
                    <FormLabel>Выберите цвет забора</FormLabel>
                    <Select defaultValue={'gray'} onChange={changeHandler}>
                        <option value='darksalmon'>darksalmon</option>
                        <option value='teal'>teal</option>
                        <option value='gray'>gray</option>
                    </Select>
                </FormControl>

            </form>
        </div>
    );
}

export default ColorControls;
