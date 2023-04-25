import React, {useContext, useEffect} from 'react';
import {Checkbox, Stack} from "@chakra-ui/react";
import {SceneContext} from "../../../context/Contexts";

const FenceOrientation = () => {
    const [checkedItems, setCheckedItems] = React.useState([true, true, true, true])
    const ctx = useContext(SceneContext)

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    useEffect(() => {
        ctx.setWalls(checkedItems)
    }, [checkedItems, ctx])

    return (
        <div>
            <Checkbox
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, e.target.checked, e.target.checked])}
            >
                Все части забора
            </Checkbox>
            <Stack pl={6} mt={1} spacing={1}>
                <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], checkedItems[2], checkedItems[3]])}
                >
                    Южная
                </Checkbox>
                <Checkbox
                    isChecked={checkedItems[1]}
                    onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, checkedItems[2], checkedItems[3]])}
                >
                    Западная
                </Checkbox>
                <Checkbox
                    isChecked={checkedItems[2]}
                    onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], e.target.checked, checkedItems[3]])}
                >
                    Северная
                </Checkbox>
                <Checkbox
                    isChecked={checkedItems[3]}
                    onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], e.target.checked])}
                >
                    Восточная
                </Checkbox>
            </Stack>
        </div>
    );
};

export default FenceOrientation;
