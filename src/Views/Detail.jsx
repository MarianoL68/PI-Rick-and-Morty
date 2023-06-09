import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {

const {id} = useParams() 

const [character, setCharacter] = useState({})

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);


   return(
      <div>
      {character.name && <h1>{character.name}</h1>}
      {character.status && <p>Status: {character.status}</p>}
      {character.species && <p>Species: {character.species}</p>}
      {character.gender && <p>Gender: {character.gender}</p>}
      {character.origin && <p>Origin: {character.origin.name}</p>}
      {character.image && <img src={character.image} alt={character.name} />}
    </div>
   )
 }

   


export default Detail;