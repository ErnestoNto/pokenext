import React, { ChangeEvent } from 'react'
import Link from 'next/link'
import { useList } from '@/hooks/useList'

import styles from './styles.module.css'

const Header = () => {
  const context = useList()

  const handleFilterBySearch = (e: ChangeEvent<HTMLInputElement>) => {
    context?.filterBySearch(e.target.value)
  }

  return (
    <header className={styles.container}>
      <h1>PokeApi</h1>

      <div>
      <input 
        type='text'
        onChange={handleFilterBySearch}
      />

      <nav>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/sobre'>Sobre</Link></li>
      </nav>
      </div>
    </header>
  )
}

export default Header
