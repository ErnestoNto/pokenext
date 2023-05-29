'use client'
import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const SobrePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <h3>Quer saber de quê? Volta pra Pokedex</h3>

        <Link href='/'>Voltar</Link>
      </div>
    </main>
  )
}

export default SobrePage
