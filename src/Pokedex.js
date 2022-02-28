"use strict";

import Pokecard from './Pokecard';

function Pokedex({ list }) {
  const pokecards = list.map(p => <Pokecard
    id={p.id}
    name={p.name}
    type={p.type}
    base_experience={p.base_experience} />
  );

  return pokecards;
}

export default Pokedex;