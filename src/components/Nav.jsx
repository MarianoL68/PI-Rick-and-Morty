import { Link } from "react-router-dom";
import SearchBar from "./searchBar/SearchBar";

const Nav = ({onSearch}) => {
    return(

        <nav>
      <SearchBar onSearch={onSearch}/>
       <div>
      <Link to="/about"><button> About </button></Link>
      <Link to="/home"><button> Home </button></Link>
      <Link to="/favorites"><button> Favorites </button></Link>
      </div>
        </nav>
      
    )
}

export default Nav;