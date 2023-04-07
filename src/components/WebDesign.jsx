import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Computer from './Computer'
import styled from 'styled-components'

const Desc = styled.div`
  width : 200px;
  height : 70px;
  padding : 20px;
  background-color : white;
  border-radius : 10px;
  position : absolute;
  top : 100px;
  right : 100px;

  @media only screen and (max-width: 768px) {
    bottom : 0;
    left : 0;
    right : 0;
    top : 0;
    margin : auto;
  }
`

const WebDesign = () => {
  return (
    <>
      <Canvas shadows >
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <Computer scale={0.015} />
      </Canvas>
      <Desc>
        我們的產品設計注重世界一流的設計，同時確保您的產品在市場上能夠取得成功。
      </Desc>
    </>
  )
}

export default WebDesign