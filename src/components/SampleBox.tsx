import React, { useRef } from 'react'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber';

const SampleBox = () => {
  const ref = useRef({} as Mesh)
  useFrame(() => (ref.current.rotation.z += 0.01))

  return (
    <group ref={ref}>
    <mesh>
      <boxBufferGeometry args={[1, 4]} attach='geometry'/>
      <meshBasicMaterial attach='material' color='hotpink' opacity={0.5} transparent/>
    </mesh>
    <mesh position={[1,3,4]}>
      <circleGeometry args={[1, 4]} attach='geometry'/>
      <meshBasicMaterial attach='material' color='hotpink' opacity={0.5} transparent/>
    </mesh>
    </group>
  )
}

export default SampleBox;