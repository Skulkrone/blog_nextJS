import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Container(props:any) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}
