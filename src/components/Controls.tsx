import { useRef, VFC } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, ReactThreeFiber, useFrame, useThree } from "@react-three/fiber";

extend({OrbitControls});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      readonly orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

const Controls: VFC = (props: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>) => {
  const {
    camera,
    gl: { domElement }
  } = useThree();
  const controls = useRef({} as OrbitControls)
  useFrame(() => controls.current.update())
  return (
    <orbitControls {...props} ref={controls} args={[camera, domElement]} />
  )
}

export default Controls;
