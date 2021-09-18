import Blocks from './Blocks'

const renderBlocks = (blocks, block) => new Array(blocks)
  .fill(blocks)
  .map((_, i) => (
    <Blocks key={i} blockCount={block} />
  ))

function Wall({ blocks, block, id }) {
  return (
    <div className="wall-wrapper" id={id}>
      {renderBlocks(blocks, block)}
    </div>
  )
}

export default Wall