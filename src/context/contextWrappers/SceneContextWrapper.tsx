import React, {useState} from 'react';
import {SceneContext} from "../Contexts";
import * as THREE from 'three'
import {ColorRepresentation} from "three";


function SceneContextWrapper({children}: {
    children: JSX.Element | JSX.Element[] | null
}) {

    const [planeHeight, setHeight] = useState(30)
    const [planeWidth, setWidth] = useState(30)
    const [colorScheme, setColorScheme] = useState('gray')

    const fenceColor = new THREE.Color(colorScheme as ColorRepresentation)

    return (
        <>
            <SceneContext.Provider value={{
                planeHeight,
                planeWidth,
                color: fenceColor,
                setHeight: (n: number) => {
                    setHeight(n)
                },
                setWidth: (n: number) => {
                    setWidth(n)
                },
                setColor: (c: string) => {
                    setColorScheme(c)
                }
            }}>
                {children}
            </SceneContext.Provider>
        </>
    );
}

export default SceneContextWrapper;
