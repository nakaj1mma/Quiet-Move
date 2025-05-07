import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'
import './styles.css'

const WinModal = () => {
  useEffect(() => {
    const duration = 3000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: Math.random() * 360,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random(),
        },
        colors: ['#00e5ff', '#ffc107', '#ffffff', '#4caf50', '#ff4081'],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }, [])

  return (
    <>
      <div className='win-modal-overlay'>
        <div className='win-modal'>
          <div className='win-icon-placeholder'>
            <svg
              version='1.0'
              xmlns='http://www.w3.org/2000/svg'
              width='64.000000pt'
              height='64.000000pt'
              viewBox='0 0 64.000000 64.000000'
              preserveAspectRatio='xMidYMid meet'
            >
              <g
                transform='translate(0.000000,64.000000) scale(0.100000,-0.100000)'
                fill='#02DBF4'
                stroke='none'
              >
                <path
                  d='M130 565 c0 -12 -14 -15 -66 -15 l-67 0 6 -52 c13 -106 83 -187 161
-188 17 0 42 -12 63 -30 18 -16 38 -30 43 -30 6 0 10 -22 10 -50 l0 -50 -45 0
c-43 0 -45 -1 -45 -30 0 -20 -5 -30 -15 -30 -8 0 -15 -7 -15 -15 0 -13 24 -15
160 -15 136 0 160 2 160 15 0 8 -7 15 -15 15 -10 0 -15 10 -15 30 0 29 -2 30
-45 30 l-45 0 0 50 c0 28 4 50 10 50 5 0 25 14 43 30 21 18 46 30 63 30 78 1
148 82 161 188 l6 52 -67 0 c-52 0 -66 3 -66 15 0 13 -28 15 -190 15 -162 0
-190 -2 -190 -15z m5 -97 c4 -24 14 -58 21 -77 8 -19 13 -36 11 -38 -2 -2 -18
2 -36 8 -36 13 -81 80 -81 122 0 25 3 27 39 27 38 0 39 -1 46 -42z m455 15 c0
-42 -45 -109 -81 -122 -18 -6 -34 -10 -36 -8 -2 2 3 19 11 38 7 19 17 53 21
77 7 41 8 42 46 42 36 0 39 -2 39 -27z'
                />
              </g>
            </svg>
          </div>
          <h1 className='win-title'>Victory!</h1>
          <p className='win-message'>
            You played a brilliant game. Ready for the next challenge?
          </p>
          <div className='win-buttons'>
            <button className='win-button win-button-rematch'>Rematch</button>
            <button className='win-button win-button-new'>New Opponent</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WinModal
