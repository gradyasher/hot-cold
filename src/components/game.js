import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import {connect} from 'react-redux'
import {guess} from '../actions'

function Game(props){
    return (
        <div>
            <Header />
            <GuessSection feedback={props.feedback}
                onGuess={(num) => props.dispatch(guess(num))} />
            <GuessCount count={props.guesses.length} />
            <GuessList guesses={props.guesses} />
        </div>
    );

}

const mapStateToProps = state => ({
    showInfomodal: state.showInfomodal,
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer
})

export default connect(mapStateToProps)(Game)