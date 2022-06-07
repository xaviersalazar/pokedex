import { useEffect, useState } from "react";
import { NextUIProvider, Text, Loading, css } from "@nextui-org/react";
import Pokedex from "pokedex-promise-v2";
import { PokemonGrid } from "./components/Pokemon/PokemonGrid";

const P = new Pokedex();
const initialURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const responseInitial = {
  count: 0,
  next: "",
  prev: "",
  results: [],
};

function App() {
  const [response, setResponse] = useState(responseInitial);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = (nextPage = false) => {
    P.getResource([nextPage ? response.next : initialURL])
      .then((res) => {
        const { count, next, previous, results: newResults } = res[0];

        setResponse({
          count,
          next,
          previous,
          results: response.results.concat(newResults),
        });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <NextUIProvider>
      <Text h1 css={{ textAlign: "center" }}>
        pokedex<span style={{ color: "#F31260" }}>.</span>
      </Text>
      {isLoading ? (
        <Loading color="error" size="xl" />
      ) : (
        <PokemonGrid response={response} P={P} getPokemon={getPokemon} />
      )}
    </NextUIProvider>
  );
}

export default App;
