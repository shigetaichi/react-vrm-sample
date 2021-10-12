import React, { Suspense } from 'react'
import VRMAsset from 'components/VRMAsset'
import { Environment } from "@react-three/drei";

export default function SampleVRMModel() {
  return (
    <Suspense fallback={null}>
      <VRMAsset url='/avatar1.vrm' />
      <Environment preset={"studio"}/>
    </Suspense>
  )
}