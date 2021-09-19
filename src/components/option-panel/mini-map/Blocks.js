import Block from './Block'
import { useAppContext } from '../../../common/useAppContext'

function Blocks({ wallId, blocksId, blocks }) {
  const { trigger } = useAppContext()

  const b = blocks.map((color, idx) => (
    <Block
      key={idx}
      wallId={wallId}
      blocksId={blocksId}
      id={idx}
      color={color}
      trigger={trigger}
    />
  ))

  return (
    <div className="mini-map-blocks">{b}</div>
  )
}

export default Blocks