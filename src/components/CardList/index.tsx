import React, { FC } from 'react'
import './style.scss'
import Monster from '../../interfaces/Monster'
import Card from '../Card'
interface CardListProps {
  monsters: Monster[]
  // children: ReactNode
}

const CardList: FC<CardListProps> = (props: CardListProps) => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}

export default CardList
