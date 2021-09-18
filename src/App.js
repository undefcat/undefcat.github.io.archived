import { useEffect, useState } from 'react'
import './App.css'
import AppContext, { defaultWalls } from './AppContext'
import Screen from './components/screen'
import OptionPanel from './components/option-panel'

function App() {
  const [walls, setWalls] = useState(defaultWalls)
  const [showConfig, setShowConfig] = useState(false)
  const [color, setColor] = useState({
    r: 255, g: 255, b: 255, a: .5,
  })

  const handleChangeColor = color => {
    setColor(color.rgb)
  }

  const setWall = (id, blocks, block, color) => {
    if (walls.hasOwnProperty(id)) {
      throw new Error(`${id} walls 값이 존재하지 않습니다.`)
    }

    const wall = walls[id]
    const newWall = wall[blocks].map((block, idx) => {
      if (idx !== block) {
        return block
      }

      return color
    })

    setWalls({
      ...walls,
      [id]: newWall,
    })
  }

  useEffect(() => {
    const handler = e => {
      if (e.code !== 'KeyC') {
        return
      }

      setShowConfig(prev => !prev)
    }

    window.addEventListener('keydown', handler)

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
