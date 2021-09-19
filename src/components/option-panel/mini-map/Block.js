import { useCallback } from 'react'

function Block({ wallId, blocksId, id, color, trigger }) {
  const {r, g, b, a} = color

  const backgroundColor = `rgba(${r},${g},${b},${a})`

  const handleMouseEnter = useCallback(e => {
    if (e.buttons !== 1) {
      return
    }

    trigger(wallId, blocksId, id)
  }, [wallId, blocksId, id, trigger])

  const handleMouseDown = useCallback(() => {
    trigger(wallId, blocksId, id)
  }, [wallId, blocksId, id, trigger])

  return (
    <div
      className="mini-map-block"
      style={{backgroundColor}}
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
    />
  )
}

export default Block