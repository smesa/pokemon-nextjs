import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

type Props = {
  favoritePokemons: number[];
};

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((pokemonId) => (
        <FavoriteCardPokemon pokemonId={pokemonId} key={pokemonId} />
      ))}
    </Grid.Container>
  );
};
