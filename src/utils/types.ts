import {Color, EulerOrder, Material, Texture} from "three";

export interface SceneContextValues {
    planeHeight: number,
    planeWidth: number,
    color?: Color,
    walls: boolean[],
    setWalls: (w: boolean[]) => void,
    setHeight: (a: number) => void,
    setWidth: (a: number) => void,
    setColor: (a: string) => void,
}

export interface FenceProps {
    rotation?: [
        x: number,
        y: number,
        z: number,
        order?: EulerOrder,
    ],
    position: [
        x: number,
        y: number,
        z: number
    ],
    length?: number,
    color?: Color,
    material?: Material,
    texture?: Texture,
    args: [
        width: number,
        height: number,
        widthSegments: number,
        heightSegments: number,
    ]
}
