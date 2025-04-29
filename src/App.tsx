import { useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { Board } from './modules/Board'

const App = () => {
  const [board, setBoard] = useState<Board>(new Board())

  useEffect(() => {
    restart()
  }, [])

  const restart = () => {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  return (
    <div className='app'>
      <div className='board-wrapper'>
        <BoardComponent board={board} setBoard={setBoard} />
      </div>
    </div>
  )
}

export default App
