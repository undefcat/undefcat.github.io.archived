import { useState } from 'react'
import { SketchPicker } from 'react-color'

function ColorPicker() {
  const [color, setColor] = useState({
    r: 255, g: 255, b: 255, a: 1,
  })

  const handleChangeColor = color => {
    setColor(color.rgb)
  }

  return (
    <SketchPicker color={color} onChange={handleChangeColor} />
  )
}

export default ColorPicker