import Wall from './Wall'
import { useAppContext } from '../../common/useAppContext'

function Screen() {
  const { walls } = useAppContext()

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