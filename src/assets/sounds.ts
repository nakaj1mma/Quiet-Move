const moveSound = new Audio('/sounds/move-sound.mp3')

export const playMoveSound = () => {
  const clone = moveSound.cloneNode() as HTMLAudioElement
  clone.play()
}
