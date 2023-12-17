import { useState } from "react";
import { allCharacters } from "../data/data";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App() {
  const [characters, setCharacters] = useState(allCharacters);

  return (
    <div className="app">
      <Navbar numOfResult={characters.length} />
      <Main > 
      <CharacterList characters={characters} />
      <CharacterDetail />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return (
    <div className="main">
    {children}
    </div>
  );
}
