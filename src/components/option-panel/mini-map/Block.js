import { useCallback } from 'react'

function Block({ wallId, blocksId, id, color, setWall }) {
  const {r, g, b, a} = color

  const backgroundColor = `rgba(${r},${g},${b},${a})`

  const handleMouseEnter = useCallback(e => {
    if (e.buttons !== 1) {
      return
    }

    setWall(wallId, blocksId, id)
  }, [wallId, blocksId, id, setWall])

  const handleMouseDown = useCallback(() => {
    setWall(wallId, blocksId, id)
  }, [wallId, blocksId, id, setWall])

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