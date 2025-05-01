import giveUpIcon from '../assets/images/interface-images/give-up.svg'
import drawIcon from '../assets/images/interface-images/draw.svg'
import sendMessageIcon from '../assets/images/interface-images/send-message.svg'

type PanelComponentProps = {
  moveCount: number
}

const PanelComponent = ({ moveCount }: PanelComponentProps) => {
  return (
    <div className='panel-side'>
      <div className='moves-container'>
        <div className='title'>
          <span>Moves:</span>
        </div>
        <div className='moves'></div>
      </div>
      <nav>
        <ul>
          <li>
            <button type='button'>
              <img src={giveUpIcon} alt='give-up-icon' />
              <span>{moveCount <= 1 ? 'Interrupt' : 'Give up'}</span>
            </button>
          </li>
          <li>
            <button type='button'>
              <img src={drawIcon} alt='draw-icon' />
              <span>Offer a draw</span>
            </button>
          </li>
        </ul>
      </nav>
      <div className='chat'>
        <div className='messages'>
          <p>
            <span>{'{%USER_NAME%}: '}</span>
            <span>test</span>
          </p>
          <p>
            <span>{'{%USER_NAME%}: '}</span>
            <span>123</span>
          </p>
        </div>
        <div className='custom-input'>
          <input type='text' placeholder='Send message...' />
          <button type='button'>
            <img src={sendMessageIcon} alt='sendIcon' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PanelComponent
