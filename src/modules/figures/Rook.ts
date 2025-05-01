import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

import blackFigure from '../../assets/images/figures/black-rook.svg'
import whiteFigure from '../../assets/images/figures/white-rook.svg'

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.image = color === Colors.BLACK ? blackFigure : whiteFigure
    this.name = FigureNames.ROOK
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
    return false
  }
}
