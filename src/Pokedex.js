"use strict";

import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex({ list }) {
  const pokecards = list.map(p => <Pokecard
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