import { useContext } from 'react'
import Wall from './Wall'
import AppContext from '../../AppContext'

function Screen() {
  const { walls } = useContext(AppContext)

  return (
    <div id="wrap">
      <div className="background" id="ground" />
      <div id="walls">
        <Wall id="center-wall" blocks={walls['center-wall']} />
        <Wall id="left-wall" blocks={walls['left-wall']} />
        <Wall id="right-wall" blocks={walls['right-wall']} />
      </div>

      <div className="background" id="pillars" />
    </div>
  )
}

export default Screen