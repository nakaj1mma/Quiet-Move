import { Cell } from '../modules/Cell'

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
      ].join(' ')}
      onClick={() => click(cell)}
      style={{ background: cell.available && cell.figure ? '#376aa59e' : '' }}
    >
      {cell.available && !cell.figure && <div className='available animated' />}

      {cell.figure?.image && (
        <img src={cell.figure.image} alt={cell.figure.name} />
      )}
    </div>
  )
}

export default CellComponent
