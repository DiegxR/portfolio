"use client"
import React from 'react'

const LoadingPage = () => {
  return (
    <div className='h-full w-full absolute top-0 left-0 z-[99] bg-[#161c24] flex gap-5 justify-center items-center flex-col'>
        <span className='icon-[gis--earth] animate-bounce duration-1000 text-white text-[80px]'></span>
        <p className='text-white duration-1000 animate-pulse'>Cargando recursos, espera un momento...</p>
    </div>
  )
}

export default LoadingPage