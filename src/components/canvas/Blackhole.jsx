import React, {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";




const Blackhole = ({isMobile}) => {
    const blackhole = useGLTF("./blackhole/scene.gltf");
    console.log(blackhole);
    return (
        <mesh>
            <hemisphereLight intensity={0.7} groundColor="black" />
            <pointLight intensity={2} />
            <primitive
                object={blackhole.scene}
                scale={isMobile ? 3 : 3}
                position={isMobile ? [0, -4, 0] : [0, -4.3, -1]}
                rotation={[0, 0.1, 0]}
            />
        </mesh>
    );
};

const BlackholeCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{
                position: [20, 3, 5 ],
                fov: 25,
            }}
            gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Blackhole isMobile = {isMobile}/>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};
export default BlackholeCanvas;