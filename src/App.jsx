import { useEffect, useState } from "react";
import { allCharacters } from "../data/data";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState(allCharacters);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`
        );
        setCharacters(data.results.slice(0, 5));
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className="app">
      <Toaster />
      <Navbar numOfResult={characters.length} query={query} setQuery={setQuery} />
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
