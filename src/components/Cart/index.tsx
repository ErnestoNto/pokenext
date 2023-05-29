import React from 'react'

import styles from './styles.module.css'

type Props = {
  name: string
  img: string
  id: string
}

const Card = ({name, img, id}: Props) => {

  const handleDetails = () => {
    alert('Ainda não foi feito :3')
  }

  return (
    <div className={styles.container}>
      <img src={img} alt={`Foto do ${name}`} />
      <h2>{name}</h2>
      <span>#{id}</span>

      <button onClick={handleDetails}>Detalhes</button>
    </div>
  )
}

export default Card
