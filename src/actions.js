export const SHOW_INFOMODAL = 'SHOW_INFOMODAL'
export const showInfomodal = () => ({
	type: SHOW_INFOMODAL
})

export const NEW_GAME = 'NEW_GAME'
export const newGame = () => ({
	type: NEW_GAME
})

export const GUESS = 'GUESS'
export const guess = (guess) => ({
	type: GUESS,
	guess
})