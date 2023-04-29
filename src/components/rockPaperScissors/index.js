import {Component} from 'react'
import Rules from '../rules'
import GameItem from '../gameItems'
import GameScore from '../gameScore'
import './index.css'

class RockPaperScissors extends Component {
  state = {
    isGameActive: true,
    score: 0,
    computerSelection: '',
    userSelection: '',
    gameResultMsg: '',
  }

  randomOption = () => {
    let computerSelectionOption
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        computerSelectionOption = 'ROCK'
        break
      case 1:
        computerSelectionOption = 'PAPER'
        break
      case 2:
        computerSelectionOption = 'SCISSORS'
        break
      default:
        computerSelectionOption = null
        break
    }
    return computerSelectionOption
  }

  onClickGameOption = userSelection => {
    const computerSelection = this.randomOption()

    if (computerSelection === userSelection) {
      this.setState({
        computerSelection,
        userSelection,
        gameResultMsg: 'IT IS DRAW',
        isGameActive: false,
      })
    } else if (computerSelection === 'ROCK' && userSelection === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        computerSelection,
        userSelection,
        gameResultMsg: 'YOU LOSE',
        isGameActive: false,
      }))
    } else if (computerSelection === 'SCISSORS' && userSelection === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        computerSelection,
        userSelection,
        gameResultMsg: 'YOU LOSE',
        isGameActive: false,
      }))
    } else if (computerSelection === 'PAPER' && userSelection === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        computerSelection,
        userSelection,
        gameResultMsg: 'YOU LOSE',
        isGameActive: false,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        computerSelection,
        userSelection,
        gameResultMsg: 'YOU WON',
        isGameActive: false,
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({isGameActive: true})
  }

  renderResult = () => {
    const {computerSelection, userSelection, gameResultMsg} = this.state
    const {choicesList} = this.props
    const computerSelectionOption = choicesList.find(
      eachItem => eachItem.id === computerSelection,
    )
    const userSelectionOption = choicesList.find(
      eachItem => eachItem.id === userSelection,
    )
    return (
      <div className="game-result-container">
        <div className="game-result-option-container">
          <div className="game-result-option-selection-container">
            <p className="game-user-info">You</p>
            <img
              className="game-option-image"
              src={userSelectionOption.imageUrl}
              alt="your choice"
            />
          </div>
          <div className="game-result-option-selection-container">
            <p className="game-user-info">Opponent</p>
            <img
              className="game-option-image"
              src={computerSelectionOption.imageUrl}
              alt="opponent choice"
            />
          </div>
        </div>
        <p className="game-result-message">{gameResultMsg}</p>
        <button
          className="play-again-button"
          type="button"
          onClick={this.onClickPlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {isGameActive, score} = this.state
    const {choicesList} = this.props
    return (
      <div className="game-bg-container">
        <div className="responsive-container">
          <GameScore score={score} />
          {isGameActive ? (
            <ul className="game-options-container">
              {choicesList.map(eachItem => (
                <GameItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  onClickGameOption={this.onClickGameOption}
                />
              ))}
            </ul>
          ) : (
            this.renderResult()
          )}
          <Rules />
        </div>
      </div>
    )
  }
}

export default RockPaperScissors
