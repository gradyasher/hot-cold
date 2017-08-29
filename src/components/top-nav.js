import React from 'react';
import './top-nav.css';
import {connect} from "react-redux"
import {showInfomodal, newGame} from '../actions'

function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={e => {
                        e.preventDefault()
                        props.dispatch(showInfomodal())
                    }}>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={e => { 
                        e.preventDefault()
                        props.dispatch(newGame())
                    }}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default connect()(TopNav)