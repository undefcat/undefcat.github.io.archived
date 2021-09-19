import ColorPicker from './color-picker'
import MiniMap from './mini-map'
import Buttons from './buttons'
import './index.css'

function OptionPanel({ color, onChangeColor, visible }) {
  return (
    <div className={visible ? '' : 'hide'} id="option">
      <MiniMap />
      <ColorPicker
        color={color}
        onChange={onChangeColor}
      />
      <Buttons />
    </div>
  )
}

export default OptionPanel