import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

export function ModelPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-96">
      <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [-15, 15, 30], fov: 45 }}>
        <ambientLight intensity={0.5} castShadow /> 
        <directionalLight position={[2, 1, 2]} intensity={1} color={'#ed904a'} castShadow/>
        <Stage adjustCamera intensity={0.2} shadows={true} environment={'sunset'} >
            {children}
        </Stage>
        <OrbitControls enablePan={true} enableZoom={false} />
      </Canvas>
    </div>
  );
}