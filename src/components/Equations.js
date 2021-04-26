import React from 'react';
import Button from './Button'
import '../App.css';

function Equations(){

    const buttonEquations = [
    {text: 'DEL', class: 'delete'},
    {text: '÷', class: 'divide'},
    {text: '*', class: 'multiply'},
    {text: '-', class: 'subtract'},
    {text: '+', class: 'add'}
    ]
    return( 
        <div className="equations">
            {buttonEquations.map( button => {
                return(
                    <Button 
                        key={button.text}
                        text={button.text} 
                        className={button.class} 
                    />
                )
            })}
        </div>
    )
}
export default Equations;