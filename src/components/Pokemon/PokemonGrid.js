import { Grid } from "@nextui-org/react";
import { PokemonCard } from "./PokemonCard";

export const PokemonGrid = ({ response }) => {
  return (
    <Grid.Container gap={4} justify="center">
      {response?.results.map(({ name, url }) => (
        <PokemonCard key={name} name={name} url={url} />
      ))}
    </Grid.Container>
  );
};
