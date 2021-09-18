import Wall from './Wall'

function Screen() {
  return (
    <div id="wrap">
      <div className="background" id="ground" />
      <div id="walls">
        <Wall id="left-wall" blocks={9} block={6} />
        <Wall id="right-wall" blocks={9} block={6} />
        <Wall id="center-wall" blocks={9} block={9} />
      </div>

      <div className="background" id="pillars" />
    </div>
  )
}

export default Screen