import { Text, Grid, Card, css } from "@nextui-org/react";

export const PokemonCard = ({ name, url }) => {
  return (
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
  );
};
