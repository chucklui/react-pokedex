import Pokedex from "./Pokedex";
import { choice, remove } from './helper';

function Pokegame({ pokemonArray }) {
  // split deck into 2 hands
  const hand1 = [];
  const newArr = pokemonArray.slice();

  for (let i = 0; i < pokemonArray.length / 2; i++) {
    let card = choice(newArr);
    hand1.push(card);
    remove(newArr, card);
    // remove(pokemonArray, card);
  }
  //
  const hand2 = newArr;
  
  console.log("1111111111", hand1);

  console.log("222222222", hand2);


  const hand1Exp = hand1.reduce(function (pokemon, score) {
    return pokemon.exp + score;
  }, 0);
  const hand2Exp = hand2.reduce(function (pokemon, score) {
    return pokemon.exp + score;
  }, 0);
  const hand1Win = (hand1Exp > hand2Exp);
  const hand2Win = !hand1Win;


  return (
    <div className="Pokedex">
      <div className="Pokedex-hand1">
        <Pokedex pokemonArray={hand1} isWinner={hand1Win} />
      </div>
      <div className="Pokedex-hand2">
        <Pokedex pokemonArray={hand2} isWinner={hand2Win} />
      </div>
    </div>
  );
}

export default Pokegame;