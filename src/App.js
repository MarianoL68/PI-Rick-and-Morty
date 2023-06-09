import Form from "./components/Form/Form";
import Detail from "./Views/Detail";
import About from "./Views/About";
import Cards from './components/cards/Cards.jsx';
import style from "./app.module.css";
import Nav from './components/Nav.jsx';
import Favorites from "./components/favorites/favorites";
import { useState, useEffect } from 'react';
import axios from 'axios';  
import { Routes, Route, useLocation, useNavigate, } from 'react-router-dom';


function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "marianoloza68@gmail.com";
  const PASSWORD = "Mariano123";

  const login = (userData) => {
   if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true);
      navigate("/home");
   }
  }

  useEffect(() => {
   !access && navigate('/');
  }, [access]);


  function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
      
   })
   .catch((error) => {
      window.alert('¡No hay personajes con este ID!');
   });
}

  const onClose = (id) => {
    const charactersFiltered = characters.filter(character => character.id !== Number(id))
    setCharacters(charactersFiltered) 
  } 


   return (
      <div className= {style.general}>
         {
         location.pathname !== "/" && <Nav onSearch={onSearch}/>
         }
            
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route path="/home" element={<Cards characters={characters} onClose= {onClose}/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>  
        
      </div>
   );
}

export default App;
