import React from 'react'
import * as C from './style'

type Props = {
  name: string
  img: string
  id: string
}

const Card = ({name, img, id}: Props) => {
  return (
    <C.Container>
      <img src={img} alt={`Foto do ${name}`} />
      <h2>{name}</h2>
      <span>#{id}</span>

      <button>Analisar</button>
    </C.Container>
  )
}

export default Card
