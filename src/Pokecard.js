"use strict";

function Pokecard({ id, name, type, base_experience }) {
  const imgBase = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
  return (
    <div>
      <h3>name</h3>
      <img src={`${imgBase}${id}.png`}> </img>
    </div >
  )
}