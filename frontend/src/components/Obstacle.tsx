const Obstacle = ({ position }: { position: number }) => {
  return (
    <div
      className="obstacle"
      style={{ left: position }}></div>
  )
}

export default Obstacle