import { useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { Board } from './modules/Board'
import { Player } from './modules/Player'
import { Colors } from './modules/Colors'

// Test imports for images
import testImageOne from './assets/images/test-images/billy-image.jpg'
import testImageTwo from './assets/images/test-images/van-darkholme.jpg'
import LostFigures from './components/LostFigures'
import Timer from './components/Timer'

const App = () => {
  const [board, setBoard] = useState<Board>(new Board())
  const [whitePlayer, setWhitePlayer] = useState<Player>(
    new Player(Colors.WHITE)
  )
  const [blackPlayer, setBlackPlayer] = useState<Player>(
    new Player(Colors.BLACK)
  )

  const [currentPlayer, setCurrentPlayer] = useState<Player>(whitePlayer)
  const [whiteTime, setWhiteTime] = useState(600)
  const [blackTime, setBlackTime] = useState(600)
  const [moveCount, setMoveCount] = useState(0)

  useEffect(() => {
    restart()
  }, [])

  const restart = () => {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
    setCurrentPlayer(whitePlayer)
  }

  const swapPlayer = () => {
    setMoveCount((prev) => prev + 1)
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    )
  }

  return (
    <main>
      <div id='wrapper'>
        <div className='game-side'></div>
        <div className='info top-side'>
          <div className='player '>
            <img src={testImageOne} alt='%USER_NAME%' />
            <div className='container'>
              <div className='user-name'>
                <p>{'{%USER_NAME%}'}</p>
              </div>
              <LostFigures figures={board.lostWhiteFigures} />
            </div>
          </div>
          <Timer
            time={blackTime}
            setTime={setBlackTime}
            isActive={moveCount >= 2 && currentPlayer?.color === Colors.BLACK}
            moveCount={moveCount}
          />
        </div>
        <div className='board-wrapper'>
          <BoardComponent
            board={board}
            setBoard={setBoard}
            currentPlayer={currentPlayer}
            swapPlayer={swapPlayer}
          />
        </div>
        <div className='info bottom-side'>
          <div className='player '>
            <img src={testImageTwo} alt='{%USER_NAME%}' />
            <div className='container'>
              <div className='user-name'>
                <p>{'{%USER_NAME%}'}</p>
              </div>
              <LostFigures figures={board.lostBlackFigures} />
            </div>
          </div>
          <Timer
            time={whiteTime}
            setTime={setWhiteTime}
            isActive={moveCount >= 2 && currentPlayer?.color === Colors.WHITE}
            moveCount={moveCount}
          />
        </div>
      </div>
    </main>
  )
}

export default App
