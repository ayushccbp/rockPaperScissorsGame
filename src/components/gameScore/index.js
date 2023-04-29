import './index.css'

const GameScore = props => {
  const {score} = props
  return (
    <div className="game-score-container">
      <h1 className="game-score-description">
        Rock <br /> Paper <br /> Scissors
      </h1>
      <div className="score-container">
        <p className="score">Score</p>
        <p className="score-count">{score}</p>
      </div>
    </div>
  )
}

export default GameScore
