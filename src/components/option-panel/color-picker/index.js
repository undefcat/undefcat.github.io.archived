import { SketchPicker } from 'react-color'

const presetColors = [
  '#D0021B80',
  '#F5A62380',
  '#F8E71C80',
  '#8B572A80',
  '#7ED32180',
  '#41750580',
  '#BD10E080',
  '#9013FE80',
  '#4A90E280',
  '#50E3C280',
  '#B8E98680',
  '#00000080',
  '#4A4A4A80',
  '#9B9B9B80',
  '#FFFFFF80',
]

function ColorPicker({ color, onChange }) {
  return (
    <section>
      <SketchPicker
        color={color}
        onChange={onChange}
        presetColors={presetColors}
      />
    </section>
  )
}

export default ColorPicker