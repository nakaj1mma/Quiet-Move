import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

import blackFigure from '../../assets/images/figures/black-knight.svg'
import whiteFigure from '../../assets/images/figures/white-knight.svg'

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.image = color === Colors.BLACK ? blackFigure : whiteFigure
    this.name = FigureNames.KNIGHT
  }
  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    const dx = Math.abs(this.cell.x - target.x)
    const dy = Math.abs(this.cell.y - target.y)

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
  }
}
