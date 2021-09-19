import { useEffect, useState } from 'react'
import './App.css'
import AppContext, { createDefaultWalls } from './AppContext'
import Screen from './components/screen'
import OptionPanel from './components/option-panel'

const FILL_TYPE_DEFAULT = 0
const FILL_TYPE_ROW = 1
const FILL_TYPE_COLUMN = 2

const isSameColor = (a, b) => a.r === b.r
  && a.g === b.g
  && a.b === b.b
  && a.a === b.a

const createUpdateBlock = (target, color) => {
  // 색깔이 채워져 있지 않은 상태면 채운다
  if (!target.fill) {
    return { ...color, fill: true }
  }

  // 색깔이 채워져 있는 경우
  // 같은 색인지 확인하고
  // 같은 색이면 색깔을 지운다
  if (isSameColor(target, color)) {
    return { ...target, a: 0, fill: false }
  }

  // 이전과 다른 색이면 색깔 바꾼다.
  return { ...color, fill: true }
}

const useShowConfigPanelEffect = (setShowConfig, code = 'KeyQ') => useEffect(() => {
  const handler = e => {
    if (e.code !== code) {
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
}, [setShowConfig])

const useSetFillTypeEffect = setFillType => useEffect(() => {
  const keyDownHandler = e => {
    switch (e.key) {
      case 'Shift':
        setFillType(FILL_TYPE_ROW)
        return

      case 'Alt':
        setFillType(FILL_TYPE_COLUMN)
        return

      default:
        setFillType(FILL_TYPE_DEFAULT)
    }
  }

  const keyUpHandler = () => {
    setFillType(FILL_TYPE_DEFAULT)
  }

  window.addEventListener('keydown', keyDownHandler)
  window.addEventListener('keyup', keyUpHandler)

  return () => {
    window.removeEventListener('keydown', keyDownHandler)
    window.removeEventListener('keyup', keyUpHandler)
  }
}, [setFillType])

function App() {
  const [walls, setWalls] = useState(createDefaultWalls())
  const [showConfig, setShowConfig] = useState(false)
  const [color, setColor] = useState({
    r: 0, g: 0, b: 0, a: .5,
  })
  const [fillType, setFillType] = useState(FILL_TYPE_DEFAULT)

  const handleChangeColor = color => {
    setColor(color.rgb)
  }

  const fillDefault = (wallId, blocksId, blockId) => {
    const blocks = walls[wallId]
    const newBlocks = blocks[blocksId].map((c, idx) => {
      if (idx !== blockId) {
        return c
      }

      return createUpdateBlock(c, color);
    })

    blocks.splice(blocksId, 1, newBlocks)

    setWalls({...walls})
  }

  const fillRow = (wallId, blocksId, blockId) => {
    const blocks = walls[wallId]
    const clicked = blocks[blocksId].find((_, idx) => idx === blockId)
    const updated = createUpdateBlock(clicked, color)

    const newBlocks = blocks[blocksId]
      .map(() => ({ ...updated }));

    blocks.splice(blocksId, 1, newBlocks)

    setWalls({...walls})
  }

  const fillColumn = (wallId, blocksId, blockId) => {
    const blocks = walls[wallId]
    const clicked = blocks[blocksId].find((_, idx) => idx === blockId)
    const updated = createUpdateBlock(clicked, color)

    const newBlocks = blocks
      .map(b => b.map((block, idx) => {
        if (idx !== blockId) {
          return block
        }

        return { ...updated }
      }))

    const newWalls = { ...walls }
    newWalls[wallId] = newBlocks

    setWalls(newWalls)
  }

  const trigger = (wallId, blocksId, blockId) => {
    if (!walls.hasOwnProperty(wallId)) {
      throw new Error(`${wallId} 값이 존재하지 않습니다.`)
    }

    switch (fillType) {
      case FILL_TYPE_DEFAULT:
        fillDefault(wallId, blocksId, blockId)
        return

      case FILL_TYPE_ROW:
        fillRow(wallId, blocksId, blockId)
        return

      case FILL_TYPE_COLUMN:
        fillColumn(wallId, blocksId, blockId)
        return

      default:
        fillDefault(wallId, blocksId, blockId)
    }
  }

  const resetWall = () => {
    setWalls(createDefaultWalls())
  }

  useShowConfigPanelEffect(setShowConfig, 'KeyQ')
  useSetFillTypeEffect(setFillType)

  const provideValue = {
    walls,
    trigger,
    resetWall,
  }

  return (
    <AppContext.Provider value={provideValue}>
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
