import style from "./searchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, SetId] = useState('')

   const handlChange = (event) => {
      SetId(event.target.value);
   }

   return (
      <div className={style.buscador}>
         <input type='search' onChange={handlChange} value={id} />
         <button onClick={() => {onSearch(id); SetId('')}}>Agregar</button>
      </div>
   );
}
