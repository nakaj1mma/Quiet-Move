import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

import blackFigure from '../../assets/images/figures/black-pawn.svg'
import whiteFigure from '../../assets/images/figures/white-pawn.svg'

export class Pawn extends Figure {
  public isFirstStep: boolean = true

  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.image = color === Colors.BLACK ? blackFigure : whiteFigure
    this.name = FigureNames.PAWN
  }
  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }

    const direction = this.color === Colors.BLACK ? 1 : -1
    const firstStepDirection = this.color === Colors.BLACK ? 2 : -2

    if (
      (target.y === this.cell.y + direction ||
        (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
      target.x === this.cell.x &&
      target.isEmpty()
    ) {
      return true
    }

    if (
      target.y === this.cell.y + direction &&
      Math.abs(target.x - this.cell.x) === 1 &&
      this.cell.isEnemy(target)
    ) {
      return true
    }

    const lastMove = this.cell.board.lastMove
    if (
      lastMove &&
      lastMove.figure instanceof Pawn &&
      Math.abs(lastMove.to.x - this.cell.x) === 1 &&
      lastMove.to.y === this.cell.y &&
      target.y === this.cell.y + direction &&
      target.x === lastMove.to.x
    ) {
      return true
    }

    return false
  }

  public moveFigure(target: Cell): void {
    const direction = this.color === Colors.BLACK ? 1 : -1
    const lastMove = this.cell.board.lastMove

    if (
      lastMove &&
      lastMove.figure instanceof Pawn &&
      Math.abs(lastMove.to.x - this.cell.x) === 1 &&
      lastMove.to.y === this.cell.y &&
      target.y === this.cell.y + direction &&
      target.x === lastMove.to.x
    ) {
      const enemyPawnCell = this.cell.board.getCell(
        lastMove.to.x,
        lastMove.to.y
      )
      if (enemyPawnCell.figure) {
        this.cell.board.addLostFigure(enemyPawnCell.figure)
        enemyPawnCell.figure = null
      }
    }

    super.moveFigure(target)
    this.isFirstStep = false
    this.cell.board.setLastMove(this, this.cell, target)
  }
}
