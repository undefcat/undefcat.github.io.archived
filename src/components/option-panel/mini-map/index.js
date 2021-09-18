import { useContext } from 'react'
import AppContext from '../../../AppContext'
import Walls from './Walls'
import './index.css'

function MiniMap() {
  const ctx = useContext(AppContext)
  const walls = []

  for (const key in ctx.walls) {
    walls.push(<Walls key={key} id={key} blocks={ctx.walls[key]} />)
  }

  return (
    <section>{walls}</section>
  )
}

export default MiniMap
