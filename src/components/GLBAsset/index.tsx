import { VFC, Suspense } from "react";
import KerRingLetters from "components/Key-ring-letters";
import { Environment } from '@react-three/drei';

const GLBAsset: VFC = () => {
  return (
    <Suspense fallback={null}>
      <KerRingLetters/>
      <Environment preset="sunset" background />
    </Suspense>
  )
}

export default GLBAsset;
