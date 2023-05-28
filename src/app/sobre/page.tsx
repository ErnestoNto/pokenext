'use client'
import React from 'react'
import * as C from './styles'
import Link from 'next/link'

const SobrePage = () => {
  return (
    <C.Container>
      <C.ContentContainer>
        <h3>Quer saber de quê? Volta pra Pokedex</h3>

        <Link href='/'>Voltar</Link>
      </C.ContentContainer>
    </C.Container>
  )
}

export default SobrePage
