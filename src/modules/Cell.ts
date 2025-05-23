import { playCheckSound, playMoveSound } from '../assets/sounds'
import { Board } from './Board'
import { Colors } from './Colors'
import { Figure } from './figures/Figure'
import { nanoid } from 'nanoid'

export class Cell {
  x: number
  y: number
  readonly color: Colors
  figure: Figure | null
  board: Board
  available: boolean
  id: string

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.board = board
    this.x = x
    this.y = y
    this.color = color
    this.figure = figure
    this.available = false
    this.id = nanoid()
  }

  public isEmpty(): boolean {
    return this.figure === null
  }

  public isEnemy(target: Cell): boolean {
    if (target.figure) {
      return this.figure?.color !== target.figure.color
    }

    return false
  }

  public isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) {
      return false
    }

    const min = Math.min(this.y, target.y)
    const max = Math.max(this.y, target.y)

    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false
      }
    }
    return true
  }

  public isEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y) {
      return false
    }

    const min = Math.min(this.x, target.x)
    const max = Math.max(this.x, target.x)

    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false
      }
    }
    return true
  }

  public isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.x)
    const absY = Math.abs(target.y - this.y)
    if (absY !== absX) {
      return false
    }

    const dy = this.y < target.y ? 1 : -1
    const dx = this.x < target.x ? 1 : -1

    for (let i = 1; i < absY; i++) {
      if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
        return false
      }
    }
    return true
  }

  public setFigure(figure: Figure) {
    this.figure = figure
    this.figure.cell = this
  }

  public moveFigure(target: Cell): boolean {
    if (
      this.figure &&
      this.figure.canMove(target) &&
      this.board.isMoveSafe(this, target)
    ) {
      const capturedFigure = target.figure
      this.figure.moveFigure(target)

      if (capturedFigure) {
        this.board.addLostFigure(capturedFigure)
      }

      target.setFigure(this.figure)
      this.figure = null

      this.board.updateKingInCheckState()
      this.board.updateIsCheckMateForKing()

      this.board.kingInCheck.black || this.board.kingInCheck.white
        ? playCheckSound()
        : playMoveSound()

      return true
    }

    return false
  }
}
