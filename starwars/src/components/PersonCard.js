import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";


const PersonCard = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>Height: {props.height}</h3>
            <h3>Mass: {props.mass}</h3>
            <h3>Birth Year: {props.birth_year}</h3>
        </div>
        
    )
}


export default PersonCard;