import React from 'react';
import './botao-laranja.css'

const strangerName = 'Clicouu';

const UIButton = ({ children }) => {
    return (
        <button onClick={() => alert(strangerName)} className="ui-button">
            {children} 
        </button>
    )

    
};

export default UIButton;

