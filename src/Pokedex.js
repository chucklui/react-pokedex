import Pokecard from './Pokecard';
import './Pokedex.css';

/** List of pokemon array
 *
 * Props:
 * - pokemonArray: array => [{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 }...]
 *
 *and returns an array of HTML elements from Pokecard
 */
function Pokedex({ pokemonArray }) {
  const pokecards = pokemonArray.map(p => <Pokecard
    id={p.id}
    name={p.name}
    type={p.type}
    base_experience={p.base_experience} />
  );

  return (
    <div className='Pokedex'>
      <h1 className='Pokedex-title'>Pokedex</h1>
      <div className='Pokedex-container'>{pokecards}</div>
    </div >)
}

export default Pokedex;