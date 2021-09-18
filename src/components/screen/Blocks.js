import Block from './Block'

function Blocks({ blockCount }) {
  const blocks = new Array(blockCount)
    .fill(0)
    .map((_, i) => <Block key={i} />)
  return (
    <div className="blocks">{blocks}</div>
  )
}

export default Blocks