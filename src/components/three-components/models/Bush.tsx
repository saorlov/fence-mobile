
interface IProps {
    position: [x: number, y: number, z: number];
    model: any;
}

const Bush = ({position, model}: IProps) => {



    return (
        <>
            <mesh
                position={position}
                scale={Math.random() * .005 + .005}
            >
                <primitive object={model}/>
            </mesh>
        </>
    );
};

export default Bush;
