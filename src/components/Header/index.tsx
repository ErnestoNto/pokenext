import React, { ChangeEvent } from 'react'
import * as C from  './styles'
import Link from 'next/link'
import { useList } from '@/hooks/useList'

const Header = () => {
  const context = useList()

  const handleFilterBySearch = (e: ChangeEvent<HTMLInputElement>) => {
    context?.filterBySearch(e.target.value)
  }

  return (
    <C.Container>
      <h1>PokeApi</h1>

      <div>
      <input 
        type='text'
        onChange={handleFilterBySearch}
      />

      <nav>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/'>Sobre</Link></li>
      </nav>
      </div>
    </C.Container>
  )
}

export default Header
