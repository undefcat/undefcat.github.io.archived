import { createContext } from 'react'

const generateBlock = block => new Array(block)
  .fill(0)
  .map(() => ({ r: 255, g: 255, b: 255, a: 0, fill: false }))

const generateBlocks = (blocks, block) => new Array(blocks)
  .fill(0)
  .map(() => generateBlock(block))

export const defaultWalls = {
  'left-wall': generateBlocks(9, 6),
  'center-wall': generateBlocks(9, 9),
  'right-wall': generateBlocks(9, 6),
}

export default createContext({
  walls: defaultWalls,
  setWall: () => {},
})