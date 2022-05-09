import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { MainLayout } from '../components/layouts';
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

type Props = {
  pokemons: SmallPokemon[];
};

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title={'Listado de Pokemon'}>
      <Grid.Container gap={2} justify={'flex-start'}>
        {pokemons.map((pokemon: SmallPokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((pokemon) => ({
    name: pokemon.name,
    url: pokemon.url,
    id: pokemon.url.split('/')[6],
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      pokemon.url.split('/')[6]
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
