import React, { useEffect, useState } from 'react';

const PokemonCard = ({ pokemonUrl }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(pokemonUrl);
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemonData();
    }, [pokemonUrl]);

    if (!pokemon) return null;

    return (
            <div>
                <div className="pokemons-block">
                    <div className="pokemons">
                        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                        <h3>{pokemon.name}</h3>
                    </div>
                </div>
            </div>
    );
};

export default PokemonCard;