import { SketchPicker } from 'react-color'

function ColorPicker({ color, onChange }) {
  return (
    <SketchPicker
      color={color}
      onChange={onChange}
    />
  )
}

export default ColorPicker