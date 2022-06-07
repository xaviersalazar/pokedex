import { useEffect, useState } from "react";
import { Text, Grid, Card, Loading, css } from "@nextui-org/react";

export const PokemonCard = ({ name, P }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    P.getPokemonByName(name)
      .then((res) => {
        console.log(res);

        setPokemonInfo(res);
        setIsLoading(false);
      })
      .catch((err) => err);
  }, []);

  return (
    <Grid xs={3}>
      <Card
        css={{
          minHeight: 250,
          marginTop: 8,
          marginBottom: 8,
        }}
      >
        {isLoading ? (
          <Loading color="error" size="md" />
        ) : (
          <Grid.Container justify="flex-start">
            <Grid>
              <img
                src={pokemonInfo.sprites.front_default}
                height={75}
                width={75}
                atl="pokemon_sprite"
              />
            </Grid>
            <Grid xs css={{ marginLeft: 4 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text
                  size={12}
                  weight="thin"
                  css={{ position: "relative", top: "$2" }}
                >
                  {pokemonInfo.types.map(({ type }) => type.name).join(" / ")}
                </Text>
                <Text h3 weight="bold">
                  {name}
                </Text>
              </div>
            </Grid>
          </Grid.Container>
        )}
      </Card>
    </Grid>
  );
};
