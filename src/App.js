import { useEffect, useState } from "react";
import {
  NextUIProvider,
  Text,
  Loading,
  Grid,
  Card,
  css,
} from "@nextui-org/react";
import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    P.getResource(["/api/v2/pokemon"])
      .then((res) => {
        console.log(res);
        const { count, next, previous, results } = res[0];

        setPokemon({ count, next, previous, results });
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
        <Grid.Container gap={4} justify="center">
          {console.log(pokemon)}
          {pokemon?.results.map(({ name, url }) => (
            <Grid xs={3}>
              <Card
                css={{
                  minHeight: 250,
                  marginTop: 8,
                  marginBottom: 8,
                }}
              >
                <Text h6>{name}</Text>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </NextUIProvider>
  );
}

export default App;
