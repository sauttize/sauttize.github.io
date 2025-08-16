import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

export function ModelPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [50, 0, 0], fov: 75, zoom: 1 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, -5]} intensity={3.5} color={'#ed904a'} castShadow/>
        <Stage adjustCamera intensity={1.5} environment={'sunset'} shadows={true}>
            {children}
        </Stage>
        <OrbitControls enablePan={true} enableZoom={true} />
      </Canvas>
    </div>
  );
}