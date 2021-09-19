import { createContext } from 'react'

const generateBlock = block => new Array(block)
  .fill(0)
  .map(() => ({ r: 255, g: 255, b: 255, a: 0, fill: false }))

const generateBlocks = (blocks, block) => new Array(blocks)
  .fill(0)
  .map(() => generateBlock(block))

export const createDefaultWalls = () => ({
  'left-wall': generateBlocks(8, 13),
  'center-wall': generateBlocks(8, 23),
  'right-wall': generateBlocks(8, 12),
})

export default createContext({
  walls: createDefaultWalls(),
  setWall: () => {},
  resetWall: () => {},
})