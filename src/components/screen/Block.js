function Block({ block }) {
  const {r, g, b, a} = block

  const backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`

  return (
    <div className="block">
      <div className="block-overlay" style={{backgroundColor}} />
      <div className="block-image" />
    </div>
  )
}

export default Block