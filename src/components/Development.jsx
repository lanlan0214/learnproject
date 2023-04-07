import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Sky from './Sky'
import styled from 'styled-components'

const Desc = styled.div`
  width : 200px;
  height : 30px;
  padding : 20px;
  background-color : white;
  border-radius : 10px;
  position : absolute;
  top : 200px;
  right : 100px;

  @media only screen and (max-width: 768px) {
    right : 0;
    top : 0;
    bottom : 0;
    left : 0;
    margin : auto;
  }
`

const Development = () => {
  return (
    <>
      <Canvas shadows >
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} autoRotate />
        <Sky scale={1.5} />
      </Canvas>
      <Desc>
        超級機器人。
      </Desc>
    </>
  )
}

export default Development