import React, { useEffect, useState } from 'react'
import { Board } from '../modules/Board'
import CellComponent from './CellComponent'
import { Cell } from '../modules/Cell'
import { Player } from '../modules/Player'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player
  swapPlayer: () => void
}

const BoardComponent = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}: BoardProps) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const click = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
    } else if (selectedCell === cell) {
      setSelectedCell(null)
    } else {
      if (currentPlayer) {
        if (cell.figure?.color === currentPlayer.color) {
          setSelectedCell(cell)
        }
      }
    }
  }

  useEffect(() => {
    hightlightCells()
  }, [selectedCell])

  const hightlightCells = () => {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <>
      <div className='board'>
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                cell={cell}
                key={cell.id}
                selected={
                  cell.x === selectedCell?.x &&
                  cell.y === selectedCell?.y &&
                  !!selectedCell?.figure
                }
                click={click}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default BoardComponent
