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
    <div>
      <h1 className='Pokedex-title'>Pokedex</h1>
      {pokecards}
    </div>)
}

export default Pokedex;