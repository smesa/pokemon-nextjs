const getFavorites = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const toggleFavorite = (id: number) => {

    let favorites: number[] = getFavorites();

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

}

const isFavorite = (id: number): boolean => {
    if (typeof window === 'undefined') return false;
    return getFavorites().includes(id);
}

export default {
    toggleFavorite,
    getFavorites,
    isFavorite
}