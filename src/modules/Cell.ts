import { Board } from './Board'
import { Colors } from './Colors'
import { Figure } from './figures/Figure'
import { nanoid } from 'nanoid'

export class Cell {
  readonly x: number
  readonly y: number
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

  public moveFigure(target: Cell) {
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target)
      target.figure = this.figure
      this.figure = null
    }
  }
}
