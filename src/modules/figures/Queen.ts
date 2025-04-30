import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

import blackFigure from '../../assets/images/black-queen.svg'
import whiteFigure from '../../assets/images/white-queen.svg'

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.image = color === Colors.BLACK ? blackFigure : whiteFigure
    this.name = FigureNames.QUEEN
  }
  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    if (this.cell.isEmptyVertical(target)) {
      return true
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true
    }
    return false
  }
}
