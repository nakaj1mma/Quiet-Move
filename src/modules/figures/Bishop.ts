import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

import blackFigure from '../../assets/images/figures/black-bishop.svg'
import whiteFigure from '../../assets/images/figures/white-bishop.svg'

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.image = color === Colors.BLACK ? blackFigure : whiteFigure
    this.name = FigureNames.BISHOP
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true
    }
    return false
  }
}
