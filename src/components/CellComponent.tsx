import { Cell } from '../modules/Cell'
import { FigureNames } from '../modules/figures/Figure'

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}

const CellComponent = ({ cell, selected, click }: CellProps) => {
  return (
    <div
      className={[
        'cell',
        'animated',
        cell.color,
        selected ? 'selected' : '',
        cell.available && cell.figure ? 'target' : '',
        cell.figure?.name === FigureNames.KING &&
        cell.board.kingInCheck[cell.figure.color]
          ? 'check-bg'
          : '',
      ].join(' ')}
      onClick={() => click(cell)}
    >
      {cell.available && !cell.figure && <div className='available animated' />}

      {cell.figure?.image && (
        <img src={cell.figure.image} alt={cell.figure.name} />
      )}
    </div>
  )
}

export default CellComponent
