import { useEffect, useState } from "react";
import { Text, Grid, Card, Loading, Avatar, css } from "@nextui-org/react";

export const PokemonCard = ({ name, url, P }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    P.getPokemonByName(name)
      .then((res) => {
        // console.log("name: ", res);
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
            <Grid xs={2}>
              <img
                src={pokemonInfo.sprites.front_default}
                height={50}
                width={50}
              />
            </Grid>
            <Grid xs>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text h3 weight="bold">
                  {name}
                </Text>
                <Text size={12} weight="thin">
                  {pokemonInfo.types.map(({ type }) => type.name).join(" / ")}
                </Text>
              </div>
            </Grid>
          </Grid.Container>
        )}
      </Card>
    </Grid>
  );
};
