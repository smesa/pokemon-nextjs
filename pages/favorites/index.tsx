import { useEffect, useState } from 'react';

import { MainLayout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    const favorites = localFavorites.getFavorites();
    setfavoritePokemons(favorites);
  }, []);

  return (
    <MainLayout title="Pókemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
