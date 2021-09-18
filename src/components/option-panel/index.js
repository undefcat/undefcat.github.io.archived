import ColorPicker from './color-picker'
import MiniMap from './mini-map'
import './index.css'

function OptionPanel({ color, onChangeColor, visible }) {
  return (
    <div className={visible ? '' : 'hide'} id="option">
      <MiniMap />
      <ColorPicker
        color={color}
        onChange={onChangeColor}
      />
    </div>
  )
}

export default OptionPanel