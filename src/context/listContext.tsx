'use client'
import { ReactNode, createContext, useEffect, useState } from "react";
import axios from 'axios'

type ListType = {
    pokemon: any
    pokemonDefault: any
    loading: boolean
    filterBySearch: (value: string) => void
}

export const ListContext = createContext<ListType | null>(null);

const ListProvider = ({ children }: { children: ReactNode }) => {
  const [pokemonDefault, setPokemonDefault] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getPokemonList = async () => {
      let array = [];
      setLoading(true)

      for (let i = 1; i <= 151; i++) {
        array.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }

      const data = await axios.all(array.map((item) => axios.get(item)))
        .then((res: any) => {
            setPokemon(res)
            setPokemonDefault(res)
            setLoading(false)
        });
    };

    getPokemonList();
  }, []);

  const filterBySearch = (value: string) => {
    if(value === ''){
      setPokemon(pokemonDefault)
    }else{
      setPokemon(pokemonDefault.filter((item: any) => item.data.name.includes(value.toLowerCase())))
    }
  }

  return <ListContext.Provider value={{pokemon, pokemonDefault, loading, filterBySearch}}>{children}</ListContext.Provider>;
};

export default ListProvider