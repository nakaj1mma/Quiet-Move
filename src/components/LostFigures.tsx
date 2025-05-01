import { Figure } from '../modules/figures/Figure'

interface LostFiguresProps {
  figures: Figure[]
}

const LostFigures = ({ figures }: LostFiguresProps) => {
  return (
    <div className='lost'>
      {figures.map((figure) => (
        <span key={figure.id}>
          {figure.image && <img src={figure.image} alt={figure.name} />}
        </span>
      ))}
    </div>
  )
}

export default LostFigures
