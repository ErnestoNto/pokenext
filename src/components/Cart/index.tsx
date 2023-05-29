import React from 'react'
import * as C from './style'

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
    <C.Container>
      <img src={img} alt={`Foto do ${name}`} />
      <h2>{name}</h2>
      <span>#{id}</span>

      <button onClick={handleDetails}>Detalhes</button>
    </C.Container>
  )
}

export default Card
