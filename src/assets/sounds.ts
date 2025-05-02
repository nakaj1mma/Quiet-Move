const moveSound = new Audio('/sounds/move-sound.mp3')
export const playMoveSound = () => {
  const clone = moveSound.cloneNode() as HTMLAudioElement
  clone.play()
}

const checkSound = new Audio('/sounds/check-sound.mp3')

export const playCheckSound = () => {
  const clone = checkSound.cloneNode() as HTMLAudioElement
  clone.play()
}
