import ColorPicker from './color-picker'
import './index.css'

function OptionPanel({ color, onChangeColor, visible }) {
  return (
    <div className={visible ? '' : 'hide'} id="option">
      <section>
        <ColorPicker
          color={color}
          onChange={onChangeColor}
        />
      </section>
    </div>
  )
}

export default OptionPanel