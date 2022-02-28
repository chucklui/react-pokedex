"use strict";

function Pokecard({ id, name, type, base_experience }) {
  const imgBase = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`;
  return (
    <div>
      <h3 className="Pokecard-name">{name}</h3>
      <img src={`${imgBase}/${id}.png`} alt="Pokemon" className="Pokecard-img"/>
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {base_experience}</p>
    </div >
  )
}

export default Pokecard