import React, { VFC, Suspense } from "react";
import { Stage } from "@react-three/drei";

const StageExample: VFC = () => {
  return (
    <Suspense fallback={null}>
      <Stage>
        <mesh>
          <boxBufferGeometry args={[1, 4]} attach='geometry'/>
          <meshBasicMaterial attach='material' color='hotpink' opacity={0.5} transparent/>
        </mesh>
      </Stage>
    </Suspense>
  )
}

export default StageExample;
