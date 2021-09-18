import Blocks from './Blocks'

const renderBlocks = (id, blocks, block) => new Array(blocks)
  .fill(blocks)
  .map((_, i) => (
    <Blocks key={i} id={id} blockCount={block} />
  ))

function Wall({ blocks, block, id }) {
  return (
    <div className="wall-wrapper" id={id}>
      {renderBlocks(id, blocks, block)}
    </div>
  )
}

export default Wall