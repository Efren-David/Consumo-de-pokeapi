import React, {useState} from 'react';
import axios from 'axios';


const PokemonSearch = () =>{
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    
    const headleInputChange = (e) => {
        setPokemonName(e.target.value)
    };
    
    const handleSearchClick = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        setPokemonData(response.data);
    };
    
    const limpiarCampo = () => {
        setPokemonData('');
        setPokemonName('');
      };
    
    
    return (
        <div className='text-poke'>
            <br/>
            <label>
                Search Pokemon:
    
                <input
                type='text'
                value={pokemonName}
                placeholder='Escribe'
                onChange={headleInputChange}
                ></input>
            </label>
            <button onClick={handleSearchClick}>Buscar</button>
            
            {pokemonData && (
                <div className='text-poke'>
                    <h2>{pokemonData.name}</h2>
                   <img src={pokemonData.sprites.front_default} alt={pokemonData.name} ></img>   
                    <div>
                        <strong>Abilities</strong>
                        <ul>
                            {pokemonData.abilities.map((ability, index) => (
                                <li key={index}>{ability.ability.name} </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <strong>Base Experience</strong> {pokemonData.base_experience}
                    </div>
                </div>
            )}
            <br></br>
            <button onClick={limpiarCampo}>Limpiar</button>
        </div>
        );
    };
    
    export default PokemonSearch;