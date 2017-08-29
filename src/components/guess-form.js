import React from 'react';
import './guess-form.css';

export default function GuessForm(props) {
    let input
    return (
        <form onSubmit={e => {
            e.preventDefault()
            if (props.onGuess) {
                const value = input.value
                props.onGuess(value)
            }
            input.value = ''
        }}>
            <label htmlFor="userGuess">Enter your Guess</label>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder={Math.round(Math.random() * 100)} required
                ref={num => input = num} />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

