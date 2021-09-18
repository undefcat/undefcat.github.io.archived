import Blocks from './Blocks'

function Wall({ id, blocks }) {
  const screenBlocks = blocks.map((blocks, idx) => (
    <Blocks key={idx} blocks={blocks} />
  ))

  return (
    <div className="wall-wrapper" id={id}>
      {screenBlocks}
    </div>
  )
}

export default Wall