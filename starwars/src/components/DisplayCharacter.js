import React from 'react';


function Display(props) {
    return (
    <div className="character-card"> 
        <div className="character-info">
            <h3>{props.character.name}</h3>
            <p>
                <strong>Gender: </strong>{props.character.gender}
            </p>
            <p>
                <strong>Date of Birth(in BBY): </strong> {props.character.birth_year}
            </p>
            <p>
                <strong>Skin Color: </strong> {props.character.skin_color}
            </p>
            <p>
                <strong>Height(in cm): </strong> {props.character.height}
            </p>
        </div>
    </div>
    );
}


export default Display;