import { VFC } from "react";
import { useFBX } from "@react-three/drei";

interface Props {
  url: string
}

const FBXAsset: VFC<Props> = ({url}: Props) => {
  const fbx = useFBX(url);
  return (
      <primitive object={fbx} dispose={null} scale={.01}/>
  )
}

export default FBXAsset;
