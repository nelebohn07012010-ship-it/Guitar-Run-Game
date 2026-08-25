const Obstacle = ({
  position,
  width,
  height
}: {
  position: number
  width: number
  height: number
}) => {
  return (
    <div
      className="obstacle"
      style={{ left: position, width: width, height: height }}></div>
  )
}

export default Obstacle