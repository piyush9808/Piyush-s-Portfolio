import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import musix from '../assets/musix.mp3'
import { soundon,soundoff } from "../assets/icons";

const Home = () => {
  const [isPlaying, setisPlaying] = useState(false);
  const audioRef = useRef(new Audio(musix));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  const [isRotating, setisRotating] = useState(false);
  const [currentStage, setcurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let islandScale, islandPosition, islandRotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      islandScale = [0.9, 0.9, 0.9];
      islandPosition = [1, -6.5, -43];
    } else {
      islandScale = [1.02, 1.02, 1.02];
      islandPosition = [1, -6.5, -43];
    }

    return [islandPosition, islandScale, islandRotation];
  };

  const adjustPlaneForScreenSize = () => {
    let PlaneScale, PlanePosition;

    if (window.innerWidth < 768) {
      PlaneScale = [1.6, 1.6, 1.6];
      PlanePosition = [0, -2, 0];
    } else {
      PlaneScale = [3, 3, 3];
      PlanePosition = [0, -4, -4];
    }

    return [PlaneScale, PlanePosition];
  };

  const [islandPosition, islandScale, islandRotation] = adjustIslandForScreenSize();

  const [PlaneScale, PlanePosition] = adjustPlaneForScreenSize();


  return (
    <section className='w-full h-screen relative'>
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}

      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            position={[1, 1, 1]} intensity={2}
          />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff" groundColor="#000000" intensity={1}
          />
          <Plane
            isRotating={isRotating}
            rotation={[0, 20, 0]}
            position={PlanePosition}
            scale={PlaneScale}

          />
          <Bird />
          <Sky
            isRotating={isRotating}
          />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setisRotating={setisRotating}
            setCurrentStage={setcurrentStage}
          />
        </Suspense>

      </Canvas>
      <div className="absolute bottom-2 left-2 ">
        <img src={!isPlaying ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setisPlaying(!isPlaying)} />
      </div>
    </section>
  )
}

export default Home
