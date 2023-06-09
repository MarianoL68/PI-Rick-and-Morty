import { Link } from "react-router-dom";
import style from "./card.module.css"
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions.js";
import React from "react";
import { useState, useEffect } from "react";

function Card({id, name, species, gender, status, origin, image, onClose, addFav, removeFav, myFavorites}) {

const [isFav, setIsFav] = useState(false);

const handleFavorite = () => {
   if(isFav){
      setIsFav(false);
      removeFav(id);
   }
   else{
      setIsFav(true);
      addFav({id, name, species, gender, status, origin, image, onClose});
   }

}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
 
   return (
   <div className={style.tarjeta}>
      {
        isFav 
        ? (
           <button onClick={handleFavorite}>❤️</button>
              ) : (
           <button onClick={handleFavorite}>🤍</button>
              )
      }
      <div className={style.interior}>
         <button onClick={() => onClose(id)}>X</button>
         <img src={image} alt='' />

        <Link to={`/detail/${id}`}>  
         <h2>{name}</h2>
         </Link>
       <div className={style.info}>
         <p>Species: {species}</p>
         <p>Gender: {gender}</p>
         <p>Status: {status}</p>
         <p>Origin: {origin}</p>
       </div>
      </div>
   </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav:(character) =>{dispatch(addFav(character))},
      removeFav:(id) => {dispatch(removeFav(id))}
   }

}


export default connect(
   mapStateToProps,//permite acceder al estado local.
   mapDispatchToProps//Permite despachar acciones.
)(Card);