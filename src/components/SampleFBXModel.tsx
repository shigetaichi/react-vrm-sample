import React, { Suspense, VFC } from "react";
import FBXAsset from "components/FBXAsset";
import { Environment } from "@react-three/drei";

const SampleFBXModel: VFC = () => {
  return (
    <Suspense fallback={null}>
      <FBXAsset url='/avatar2.fbx'/>
      <Environment preset="dawn" background/>
    </Suspense>
  )
}

export default SampleFBXModel;
