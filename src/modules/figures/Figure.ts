import { nanoid } from 'nanoid'
import image from '../../assets/images/black-bishop.svg'
import { Cell } from '../Cell'
import { Colors } from '../Colors'

export enum FigureNames {
  FIGURE = 'Figure',
  KING = 'King',
  KNIGHT = 'Knight',
  PAWN = 'Pawn',
  QUEEN = 'Queen',
  ROOK = 'Rook',
  BISHOP = 'Bishop',
}

export class Figure {
  color: Colors
  image: typeof image | null
  cell: Cell
  name: FigureNames
  id: string

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.image = null
    this.name = FigureNames.FIGURE
    this.id = nanoid()
  }

  public canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false
    if (target.figure?.name === FigureNames.KING) {
      return false
    }
    return true
  }

  public moveFigure(target: Cell) {}
}
