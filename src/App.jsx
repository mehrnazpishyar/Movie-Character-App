import { useEffect, useState } from "react";
import { allCharacters } from "../data/data";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App() {
  const [characters, setCharacters] = useState(allCharacters);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data =await res.json();
      setCharacters(data.results.slice(0, 5));
      setIsLoading(false)
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Navbar numOfResult={characters.length} />
      <Main>
        <CharacterList characters={characters} isLoading={isLoading} />
        <CharacterDetail />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
