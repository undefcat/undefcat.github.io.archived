import { useEffect, useState } from 'react'
import './App.css'
import AppContext, { defaultWalls } from './AppContext'
import Screen from './components/screen'
import OptionPanel from './components/option-panel'

function App() {
  const [walls, setWalls] = useState(defaultWalls)
  const [showConfig, setShowConfig] = useState(false)
  const [color, setColor] = useState({
    r: 0, g: 0, b: 0, a: .5,
  })

  const handleChangeColor = color => {
    setColor(color.rgb)
  }

  const setWall = (wallId, blocksId, blockId) => {
    if (!walls.hasOwnProperty(wallId)) {
      throw new Error(`${wallId} 값이 존재하지 않습니다.`)
    }

    const blocks = walls[wallId]
    const newBlocks = blocks[blocksId].map((c, idx) => {
      if (idx !== blockId) {
        return c
      }

      // 색깔이 채워져 있지 않은 상태면 채운다
      if (!c.fill) {
        return { ...color, fill: true }
      }

      const isSame = (c.r === color.r)
        && (c.g === color.g)
        && (c.b === color.b)
        && (c.a === color.a)

      // 색깔이 채워져 있는 경우
      // 같은 색인지 확인하고
      // 같은 색이면 색깔을 지운다
      if (isSame) {
        return { ...c, a: 0, fill: false }
      }

      // 이전과 다른 색이면 색깔 바꾼다.
      return { ...color }
    })

    blocks.splice(blocksId, 1, newBlocks)

    setWalls({...walls})
  }

  useEffect(() => {
    const handler = e => {
      if (e.code !== 'KeyQ') {
        return
      }

      setShowConfig(prev => !prev)
    }

    window.addEventListener('keydown', handler)
    window.addEventListener('beforeunload', e => {
      e.preventDefault()

      e.returnValue = ''
    })

    return () => {
      window.removeEventListener('keydown', handler)
    }

  }, [])

  return (
    <AppContext.Provider value={{ walls, setWall }}>
      <Screen
        color={color}
      />
      <OptionPanel
        color={color}
        onChangeColor={handleChangeColor}
        visible={showConfig}
      />
    </AppContext.Provider>
  )
}

export default App
