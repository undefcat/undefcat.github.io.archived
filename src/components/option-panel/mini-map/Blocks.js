import { useContext } from 'react'
import Block from './Block'
import AppContext from '../../../AppContext'

function Blocks({ wallId, blocksId, blocks }) {
  const { setWall } = useContext(AppContext)

  const b = blocks.map((color, idx) => (
    <Block
      key={idx}
      wallId={wallId}
      blocksId={blocksId}
      id={idx}
      color={color}
      setWall={setWall}
    />
  ))

  return (
    <div className="mini-map-blocks">{b}</div>
  )
}

export default Blocks