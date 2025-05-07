import React, { useEffect } from 'react'
import './styles.css'

const LoseModal = () => {
  useEffect(() => {
    const pieces = ['♟', '♞', '♜', '♛', '♚']
    const elements: HTMLDivElement[] = []

    for (let i = 0; i < 40; i++) {
      const el = document.createElement('div')
      el.className = 'lose-falling'
      el.style.left = Math.random() * 100 + 'vw'
      el.style.animationDuration = 2 + Math.random() * 3 + 's'
      el.style.fontSize = 16 + Math.random() * 24 + 'px'
      el.innerText = pieces[Math.floor(Math.random() * pieces.length)]
      document.body.appendChild(el)
      elements.push(el)
    }

    return () => {
      elements.forEach((el) => el.remove())
    }
  }, [])

  return (
    <div className='lose-modal-overlay'>
      <div className='lose-modal'>
        <div className='lose-icon-placeholder'>
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
              fill='#263D5C'
              stroke='none'
            >
              <path
                d='M492 628 c-7 -7 -12 -16 -12 -21 0 -5 -9 -22 -20 -38 -16 -22 -19
-33 -11 -48 11 -20 8 -37 -12 -79 -8 -17 -8 -28 1 -42 7 -11 12 -47 12 -81 l0
-61 46 7 c72 10 74 12 74 66 0 27 5 58 12 68 9 15 8 26 -5 54 -11 22 -15 46
-11 66 5 25 2 37 -15 55 -12 12 -18 25 -15 29 7 7 -14 37 -25 37 -4 0 -12 -5
-19 -12z m41 -54 c10 -10 -12 -44 -27 -44 -16 0 -29 27 -20 41 6 10 38 12 47
3z m27 -114 c0 -5 -22 -10 -50 -10 -27 0 -50 5 -50 10 0 6 23 10 50 10 28 0
50 -4 50 -10z m10 -40 c0 -6 -27 -10 -60 -10 -33 0 -60 4 -60 10 0 6 27 10 60
10 33 0 60 -4 60 -10z'
              />
              <path
                d='M220 414 c-6 -16 -13 -35 -15 -41 -2 -7 0 -13 5 -13 10 0 34 69 26
77 -3 3 -10 -7 -16 -23z'
              />
              <path d='M253 390 c-6 -16 -8 -32 -4 -35 4 -2 13 11 19 30 13 43 1 47 -15 5z' />
              <path
                d='M60 345 c0 -11 -7 -15 -21 -13 -27 4 -48 -39 -24 -48 8 -4 15 -15 15
-25 0 -25 27 -36 52 -20 16 10 23 7 48 -20 19 -21 35 -30 48 -27 12 3 31 -5
53 -24 23 -21 40 -28 56 -24 13 4 44 -4 75 -18 61 -29 82 -44 91 -68 3 -10 11
-18 17 -18 5 0 10 -4 10 -10 0 -6 -85 -10 -235 -10 -150 0 -235 -4 -235 -10 0
-6 112 -10 315 -10 203 0 315 4 315 10 0 6 -22 10 -50 10 -27 0 -50 1 -50 3 0
2 16 50 35 106 19 57 32 107 30 112 -6 9 -86 9 -100 -1 -26 -18 -175 13 -175
36 0 15 -13 17 -68 14 -19 -1 -41 5 -50 14 -13 11 -26 13 -54 7 -41 -10 -48
-6 -48 21 0 10 -4 18 -9 18 -5 0 -16 3 -25 6 -11 4 -16 1 -16 -11z m95 -84
c-3 -12 -13 -21 -20 -21 -11 0 -12 6 -3 31 12 34 34 25 23 -10z m105 -35 c-6
-20 -18 -36 -25 -36 -11 0 -11 8 2 46 10 30 19 42 25 36 7 -7 6 -22 -2 -46z
m50 41 c0 -24 -32 -107 -41 -107 -12 0 -12 5 8 67 15 49 33 70 33 40z m280
-34 c0 -16 -63 -198 -71 -207 -22 -24 -18 11 11 101 18 54 35 101 37 106 5 9
23 9 23 0z m-100 -20 c0 -25 -36 -113 -47 -113 -7 0 -13 2 -13 4 0 3 20 62 35
104 5 12 25 17 25 5z'
              />
            </g>
          </svg>
        </div>
        <h1 className='lose-title'>Defeat</h1>
        <p className='lose-message'>
          The game is lost, but every loss is a lesson. Try again?
        </p>
        <div className='lose-buttons'>
          <button className='lose-button lose-button-rematch'>Rematch</button>
          <button className='lose-button lose-button-new'>New Opponent</button>
        </div>
      </div>
    </div>
  )
}

export default LoseModal
