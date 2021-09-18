import { useState } from 'react'

function Block() {
  const [color, setColor] = useState({
    r: 255, g: 255, b: 255, a: 0,
  })

  const backgroundColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
  return (
    <div className="block">
      <div className="block-overlay" style={{backgroundColor}}/>
      <div className="block-image" />
    </div>
  )
}

export default Block