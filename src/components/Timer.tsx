import { useEffect, useState } from 'react'
import clockIcon from '../assets/images/interface-images/clock.svg'

interface TimerProps {
  isActive: boolean
  time: number
  setTime: React.Dispatch<React.SetStateAction<number>>
  moveCount: number
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${minutes.toString().padStart(2, '0')}:${secs
    .toString()
    .padStart(2, '0')}`
}

const Timer = ({ isActive, time, setTime, moveCount }: TimerProps) => {
  const [rotation, setRotation] = useState(0)
  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setTime((prev) => Math.max(prev - 1, 0))
      setRotation((prev) => prev + 90)
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div className={`clock ${isActive && moveCount > 1 ? 'active' : ''}`}>
      <img
        src={clockIcon}
        alt='clock'
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.3s ease-in-out',
        }}
      />
      <p>{formatTime(time)}</p>
    </div>
  )
}

export default Timer
