'use client'
import React, { useEffect, useState } from 'react'
import Card from '@/components/Cart'
import { useList } from '@/hooks/useList'

import styles from './styles.module.css'

const Home = () => {
  const context = useList()

  return (
    <main className={styles.container}>
      {context?.loading ? 
      <div>Carregando...</div> : 
      context?.pokemon.map((item: any) => (
        <Card key={item.data.id} name={item.data.name} img={item.data.sprites.front_default} id={item.data.id} />
      ))
      }
    </main>
  )
}

export default Home
