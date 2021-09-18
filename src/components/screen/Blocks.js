import Block from './Block'

function Blocks({ blocks }) {
  const screenBlocks = blocks.map((block, idx) => (
    <Block key={idx} block={block} />
  ))

  return (
    <div className="blocks">{screenBlocks}</div>
  )
}

export default Blocks