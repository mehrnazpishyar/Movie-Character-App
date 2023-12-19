
import {HeartIcon} from "@heroicons/react/24/outline";

const Navbar = ({numOfResult, query, setQuery,numOfFavourites}) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGO</div>
      <input type="text" className="text-field" placeholder="Search..." value={query} onChange={(e)=>setQuery(e.target.value)}/>
      <div className="navbar__result">Found {numOfResult} characters</div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">{numOfFavourites}</span>
      </button>
    </nav>
  );
};

export default Navbar;
