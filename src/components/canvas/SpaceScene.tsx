  'use client';

  import { Canvas, type CanvasProps } from '@react-three/fiber';
  import { Preload } from '@react-three/drei';
  import StarField from './StarField';
  import InteractiveText from './InteractiveText';

  interface SpaceSceneProps extends CanvasProps {
    searchParams?: any;
  }

  export default function SpaceScene({ searchParams, ...props }: SpaceSceneProps) {
    return (
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'radial-gradient(circle at center, #0a0f2c 10%, #000 90%)' }}
        {...props}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} color="#1a1aff" /> {/* biru pekat */}
        <pointLight position={[5, 5, 5]} color="#4a86e8" intensity={1.2} /> {/* biru terang */}
        <pointLight position={[-5, -5, -5]} color="#1e3a8a" intensity={0.6} /> {/* biru tambahan */}

        {/* Objects */}
        <StarField starColor="#7dd3fc" /> {/* bintang agak biru */}
        <InteractiveText />

        <Preload all />
      </Canvas>
    );
  }
