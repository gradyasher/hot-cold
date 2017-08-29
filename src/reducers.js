import {SHOW_INFOMODAL, NEW_GAME, GUESS} from './actions'

const initialState = {
	showInfoModal: false,
	guesses: [],
	feedback: 'Make your guess!',
	correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const gameReducer = (state=initialState, action) => {
	if(action.type === SHOW_INFOMODAL) {
		return Object.assign({}, state, { showInfoModal: !state.showInfoModal })
	}
	else if(action.type === NEW_GAME) {
		return Object.assign({}, state, {
			showInfoModal: false,
			guesses: [],
			feedback: 'Make your guess!',
			correctAnswer: Math.floor(Math.random() * 100) + 1
		})
	}
	else if(action.type === GUESS) {
		const guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
        	return Object.assign({}, state, {
        		feedback: 'Please enter a valid number'
        	})
        }

        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        return Object.assign({}, state, {
            feedback,
            guesses: [...state.guesses, guess]
        });
	}
	return state
}