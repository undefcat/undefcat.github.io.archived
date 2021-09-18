import Wall from './Wall'

function Screen({ color }) {
  return (
    <div id="wrap">
      <div className="background" id="ground" />
      <div id="walls">
        <Wall id="center-wall" blocks={8} block={23} />
        <Wall id="left-wall" blocks={8} block={13} />
        <Wall id="right-wall" blocks={8} block={12} />
      </div>

      <div className="background" id="pillars" />
    </div>
  )
}

export default Screen