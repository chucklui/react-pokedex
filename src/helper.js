"use strict";

/** Choice returns a randomly selected item from array of items */
function choice(items) {
  const indexChoice = Math.floor(Math.random() * items.length) + 1;
  return items[indexChoice];
}

/** removes the first matching item from items, if item exists, and returns it. 
 * Otherwise returns undefined */
function remove(items, item) {
  let index = items.indexOf(item);
  items.splice(index, 1);
  return items;
}

export { choice, remove };