import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

import blackFigure from '../../assets/images/figures/black-king.svg'
import whiteFigure from '../../assets/images/figures/white-king.svg'

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.image = color === Colors.BLACK ? blackFigure : whiteFigure
    this.name = FigureNames.KING
  }

  public canMove(target: Cell, ignoreCheck: boolean = false): boolean {
    if (!super.canMove(target)) {
      return false
    }

    const dx = Math.abs(target.x - this.cell.x)
    const dy = Math.abs(target.y - this.cell.y)

    if (dx <= 1 && dy <= 1) {
      if (ignoreCheck) {
        return true
      }

      const originalCell = this.cell
      const originalTargetFigure = target.figure

      this.cell.figure = null
      target.figure = this
      this.cell = target

      const isUnderAttack = this.cell.board.isCellUnderAttack(
        target,
        this.color === Colors.WHITE ? Colors.BLACK : Colors.WHITE
      )

      this.cell = originalCell
      target.figure = originalTargetFigure
      this.cell.figure = this

      return !isUnderAttack
    }

    return false
  }
}
