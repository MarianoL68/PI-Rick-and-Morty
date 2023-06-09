import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorites: [],
} 


const reducer = (state = initialState, {type, payload}) => {
    switch(type){
     case ADD_FAV:
        return{
            ...state,
            myFavorites: [...state.myFavorites, payload]

        }

     case REMOVE_FAV:
        return{
            ...state,
            myFavorites: state.myFavorites.filter(fav => fav.id !== payload)//agarramos el estado myFavorites,lo filtramos y le decimos que nos quedamos con todos los favoritos que su id sea diferente al de payload.
        }   
  
  
    default:
        return{...state}
        
    }

}

export default reducer;