import { VFC } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";


interface Props {
  url: string
}

const OBJAsset: VFC<Props> = ({url}: Props) => {
  const obj = useLoader(OBJLoader, url);
  return (
    <primitive object={obj} dispose={null} scale={0.005}/>
  )
}

export default OBJAsset;
