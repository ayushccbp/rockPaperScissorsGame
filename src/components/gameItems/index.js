import './index.css'

const GameItem = props => {
  const {eachItem, onClickGameOption} = props
  const {id, imageUrl} = eachItem

  const userSelection = () => {
    onClickGameOption(id)
  }
  let dataTestIdName

  if (id === 'ROCK') {
    dataTestIdName = 'rockButton'
  } else if (id === 'SCISSORS') {
    dataTestIdName = 'scissorsButton'
  } else {
    dataTestIdName = 'paperButton'
  }

  return (
    <li className="game-option">
      <button
        type="button"
        className="game-option-container"
        onClick={userSelection}
        data-testid={dataTestIdName}
      >
        <img className="game-option-image" alt={id} src={imageUrl} />
      </button>
    </li>
  )
}

export default GameItem
