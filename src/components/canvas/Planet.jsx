import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls,  useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader.jsx'


const Planet = ({isMobile}) => {
    const mercury = useGLTF('./mercury/scene.gltf')
    return (
        <primitive
            object={mercury.scene}
            scale={isMobile ? 0.4 : 0.6}
            position={isMobile ? [0, 0, 0] : [0, 0, 0]}
            rotation={[0, 0,1, 0]}

        />
    )
}
const PlanetCanvas = () => {
    return(
        <Canvas
            shadows
            frameloop='demand'
            gl={{preserveDrawingBuffer : true}}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-5, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={5}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ambientLight
                    intensity={0.1}
                />
                <directionalLight
                    position={[0, 0, 1]}
                    intensity={0.5}
                />
                <Planet/>
            </Suspense>
        </Canvas>
    )
}

export default PlanetCanvas;