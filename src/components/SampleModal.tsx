import React, { Suspense } from 'react'
import VRMAsset from 'components/VRMAsset'

export default function SampleModel() {
  return (
    <Suspense fallback={null}>
      <VRMAsset url='/avatar1.vrm' />
    </Suspense>
  )
}