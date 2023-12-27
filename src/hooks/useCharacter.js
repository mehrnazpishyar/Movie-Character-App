import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useCharacter(url,query){
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
          try {
            setIsLoading(true);
            const { data } = await axios.get(
              `${url}=${query}`
            );
            setCharacters(data.results);
          } catch (error) {
            toast.error(error.response.data.error);
          } finally {
            setIsLoading(false);
          }
        }
        fetchData();
      }, [query]);
    
      return {isLoading, characters}
}