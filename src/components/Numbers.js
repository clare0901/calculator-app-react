import React from 'react';
import Button from './Button'
import '../App.css';

function Numbers(){
    const buttonData = [
        {text: "7", class: "7"},
        {text: "8", class: "8"},
        {text: "9", class: "9"},
        {text: "4", class: "4"},
        {text: "5", class: "5"},
        {text: "6", class: "6"},
        {text: "1", class: "1"},
        {text: "2", class: "2"},
        {text: "3", class: "3"},
        {text: ".", class: "decimal"},
        {text: "0", class: "0"},
        {text: "=", class: "equals"}
    ]
      
    return( 
        <div className="numbers">
            {buttonData.map( button => {
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
export default Numbers;