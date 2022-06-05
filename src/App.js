import { useEffect, useState } from "react";
import { NextUIProvider, Text, Loading, css } from "@nextui-org/react";
import Pokedex from "pokedex-promise-v2";
import { PokemonGrid } from "./components/Pokemon/PokemonGrid";

const P = new Pokedex();

function App() {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    P.getResource(["/api/v2/pokemon"])
      .then((res) => {
        console.log(res);
        const { count, next, previous, results } = res[0];

        setResponse({ count, next, previous, results });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <NextUIProvider>
      <Text h1 css={{ textAlign: "center" }}>
        pokedex<span style={{ color: "#F31260" }}>.</span>
      </Text>
      {isLoading ? (
        <Loading color="error" size="xl" />
      ) : (
        <PokemonGrid response={response} />
      )}
    </NextUIProvider>
  );
}

export default App;
