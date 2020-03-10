import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import App from "../App";




const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 40%;
background: rgb(248,255,187);
background: radial-gradient(circle, rgba(248,255,187,1) 21%, rgba(178,235,255,1) 100%);
color: black;
margin-left: 28%;
border-style: outset;
margin-bottom: 3%;
padding: 1%;
border-radius: 10px;
`;


const PersonCard = (props) => {
    return(
        
        <Card>
            <h1>{props.name}</h1>
            <h3>Gender: {props.gender}</h3>
            <h3>Hair Color: {props.hair}</h3>
            <h3>Height: {props.height}</h3>
            <h3>Mass: {props.mass}</h3>
            <h3>Birth Year: {props.birth_year}</h3>
        </Card>

        
    )
}


export default PersonCard;