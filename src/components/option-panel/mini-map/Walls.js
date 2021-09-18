import Blocks from './Blocks'

function Walls({ id, blocks }) {
  const b = blocks.map((blocks, idx) => (
    <Blocks
      key={idx}
      wallId={id}
      blocksId={idx}
      blocks={blocks}
    />
  ))

  return (
    <div className="mini-map-walls">{b}</div>
  )
}

export default Walls