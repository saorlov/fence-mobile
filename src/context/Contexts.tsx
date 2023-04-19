import {createContext} from "react";
import {SceneContextValues} from "../utils/types";


export const SceneContext = createContext<SceneContextValues>({
    planeHeight: 30,
    planeWidth: 30,
    color: undefined,
    setHeight: () => {},
    setWidth: () => {},
    setColor: () => {},
})
