import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";
import PersonCard from "../components/PersonCard"

const Character = () => {

    const [person, setPerson] = useState([]);

    useEffect(() => {
    axios.get('https://swapi.co/api/people/')
        .then(response => {console.log(response);
        setPerson(response.data.results);
    });
    }, []);
    
    return (

         person.map(data => {
             return(
                <PersonCard
                    name={data.name}
                    gender={data.gender}
                    height={data.height}
                    mass={data.mass}
                    birth_year={data.birth_year}
                    hair={data.hair_color}
                    
                    />
                )
            })
        
    );





}

export default Character;