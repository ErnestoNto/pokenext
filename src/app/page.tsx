'use client'
import React, { useEffect, useState } from 'react'
import * as C from './style'
import Card from '@/components/Cart'
import { useList } from '@/hooks/useList'

const Home = () => {

  const context = useList()

  return (
    <C.Container>
      {context?.pokemon.map((item: any) => (
        <Card key={item.data.id} name={item.data.name} img={item.data.sprites.front_default} id={item.data.id} />
      ))}
    </C.Container>
  )
}

export default Home
