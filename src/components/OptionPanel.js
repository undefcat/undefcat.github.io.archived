import ColorPicker from './ColorPicker'
import './OptionPanel.css'

function OptionPanel({ color, onChangeColor, visible }) {
  return (
    <div className={visible ? '' : 'hide'} id="option">
      <ColorPicker
        color={color}
        onChange={onChangeColor}
      />
    </div>
  )
}

export default OptionPanel