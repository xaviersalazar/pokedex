import { Grid, Loading } from "@nextui-org/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { PokemonCard } from "./PokemonCard";

export const PokemonGrid = ({ response, P, getPokemon }) => {
  console.log("res: ", response);
  return (
    <div id="pokemon-list">
      <InfiniteScroll
        dataLength={response.results.length}
        next={() => getPokemon(true)}
        hasMore={true}
        loader={<Loading color="error" size="md" />}
        scrollThreshold="80px"
      >
        <Grid.Container gap={4} justify="center">
          {response.results.map(({ name, url }) => (
            <PokemonCard key={name} name={name} url={url} P={P} />
          ))}
        </Grid.Container>
      </InfiniteScroll>
    </div>
  );
};
