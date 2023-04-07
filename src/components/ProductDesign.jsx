import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Impact from './Impact'
import styled from 'styled-components'

const Desc = styled.div`
  width : 200px;
  height : 70px;
  padding : 20px;
  background-color : white;
  border-radius : 10px;
  position : absolute;
  bottom : 500px;
  right : 100px;

  @media only screen and (max-width: 768px) {
    bottom : 2rem;
    right : 0;
    left : 0;
    margin : auto;
  }
`

const ProductDesign = () => {
  return (
    <>
      <Canvas >
        <ambientLight intensity={0} />
        <OrbitControls enableZoom={false} autoRotate />
        <Impact scale={0.15} />
      </Canvas>
      <Desc>
        我們的產品設計注重世界一流的設計，同時確保您的產品在市場上能夠取得成功。
      </Desc>
    </>
  )
}

export default ProductDesign