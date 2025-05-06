import { Cell } from './Cell'
import { Colors } from './Colors'
import { Bishop } from './figures/Bishop'
import { Figure, FigureNames } from './figures/Figure'
import { King } from './figures/King'
import { Knight } from './figures/Knight'
import { Pawn } from './figures/Pawn'
import { Queen } from './figures/Queen'
import { Rook } from './figures/Rook'

export class Board {
  cells: Cell[][] = []
  lostBlackFigures: Figure[] = []
  lostWhiteFigures: Figure[] = []
  lastMove: { figure: Figure; from: Cell; to: Cell } | null = null
  kingInCheck: { white: boolean; black: boolean }

  constructor() {
    this.kingInCheck = { white: false, black: false }
  }

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null))
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null))
        }
      }
      this.cells.push(row)
    }
  }

  public updateKingInCheckState() {
    this.kingInCheck.white = this.isKingInCheck(Colors.WHITE)
    this.kingInCheck.black = this.isKingInCheck(Colors.BLACK)
  }

  public getCopyBoard(): Board {
    const newBoard = new Board()
    newBoard.cells = this.cells
    newBoard.lostWhiteFigures = this.lostWhiteFigures
    newBoard.lostBlackFigures = this.lostBlackFigures
    return newBoard
  }

  public setLastMove(figure: Figure, from: Cell, to: Cell) {
    this.lastMove = { figure, from, to }
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i]
      for (let j = 0; j < row.length; j++) {
        const target = row[j]
        target.available = !!selectedCell?.figure?.canMove(target)
      }
    }
  }

  public isCellUnderAttack(cell: Cell, byColor: Colors): boolean {
    for (const row of this.cells) {
      for (const attacker of row) {
        if (attacker.figure && attacker.figure.color === byColor) {
          if (attacker.figure.name === FigureNames.KING) {
            const dx = Math.abs(cell.x - attacker.x)
            const dy = Math.abs(cell.y - attacker.y)
            if (dx <= 1 && dy <= 1) {
              return true
            }
          } else if (attacker.figure.canMove(cell, true)) {
            return true
          }
        }
      }
    }
    return false
  }

  public isKingInCheck(color: Colors): boolean {
    const kingCell = this.findKingCell(color)
    if (!kingCell) return false

    const enemyColor = color === Colors.WHITE ? Colors.BLACK : Colors.WHITE

    return this.isCellUnderAttack(kingCell, enemyColor)
  }

  private findKingCell(color: Colors): Cell | null {
    for (const row of this.cells) {
      for (const cell of row) {
        if (
          cell.figure?.name === FigureNames.KING &&
          cell.figure.color === color
        ) {
          return cell
        }
      }
    }
    return null
  }

  public addLostFigure(figure: Figure) {
    figure.color === Colors.BLACK
      ? this.lostBlackFigures.push(figure)
      : this.lostWhiteFigures.push(figure)
  }

  public getCell(x: number, y: number): Cell {
    return this.cells[y][x]
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1))
      new Pawn(Colors.WHITE, this.getCell(i, 6))
    }
  }

  private addQueens() {
    new Queen(Colors.BLACK, this.getCell(3, 0))
    new Queen(Colors.WHITE, this.getCell(3, 7))
  }

  private addKings() {
    new King(Colors.BLACK, this.getCell(4, 0))
    new King(Colors.WHITE, this.getCell(4, 7))
  }

  private addKnights() {
    new Knight(Colors.BLACK, this.getCell(1, 0))
    new Knight(Colors.BLACK, this.getCell(6, 0))
    new Knight(Colors.WHITE, this.getCell(1, 7))
    new Knight(Colors.WHITE, this.getCell(6, 7))
  }

  private addBishops() {
    new Bishop(Colors.BLACK, this.getCell(2, 0))
    new Bishop(Colors.BLACK, this.getCell(5, 0))
    new Bishop(Colors.WHITE, this.getCell(2, 7))
    new Bishop(Colors.WHITE, this.getCell(5, 7))
  }

  private addRooks() {
    new Rook(Colors.BLACK, this.getCell(0, 0))
    new Rook(Colors.BLACK, this.getCell(7, 0))
    new Rook(Colors.WHITE, this.getCell(0, 7))
    new Rook(Colors.WHITE, this.getCell(7, 7))
  }

  public addFigures() {
    this.addBishops()
    this.addKings()
    this.addKnights()
    this.addQueens()
    this.addPawns()
    this.addRooks()
  }
}
