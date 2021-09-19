import Walls from './Walls'
import { useAppContext } from '../../../common/useAppContext'
import './index.css'

function MiniMap() {
  const ctx = useAppContext()
  const walls = []

  for (const key in ctx.walls) {
    walls.push(<Walls key={key} id={key} blocks={ctx.walls[key]} />)
  }

  return (
    <section>{walls}</section>
  )
}

export default MiniMap
