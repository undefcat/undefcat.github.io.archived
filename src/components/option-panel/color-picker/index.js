import { SketchPicker } from 'react-color'

function ColorPicker({ color, onChange }) {
  return (
    <section>
      <SketchPicker
        color={color}
        onChange={onChange}
      />
    </section>
  )
}

export default ColorPicker