import React, { FC } from 'react'
import './style.scss'
import Monster from '../../interfaces/Monster'

interface CardProps {
  monster: Monster
}
const Card: FC<CardProps> = (props: CardProps) => {
  return (
    <div className="card-container">
      <img
        className="card-container__img"
        src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
        alt="monster"
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  )
}

export default Card
