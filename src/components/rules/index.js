import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'
import 'reactjs-popup/dist/index.css'

const Rules = () => (
  <Popup
    modal
    position="center"
    trigger={
      <button className="rules-button" type="button">
        Rules
      </button>
    }
  >
    {close => (
      <div className="popup-image-container">
        <button
          className="close-icon-button"
          type="button"
          onClick={() => close()}
        >
          <RiCloseLine className="close-icon" size={20} />
        </button>

        <img
          className="rules-image"
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </div>
    )}
  </Popup>
)

export default Rules
