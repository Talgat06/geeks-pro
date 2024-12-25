import React, {useEffect, useState} from 'react';
import PokemonCard from "../../components/pokemons/PokemonCard";

const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemon = async (url = 'https://pokeapi.co/api/v2/pokemon?limit=6') => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPokemonList(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <div>
            <div>
                <h2>Pokemons</h2>
            </div>
            <div>
                {pokemonList.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
                ))}
            </div>
        </div>
    );
};

export default PokemonPage;