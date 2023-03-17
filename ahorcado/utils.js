/**
 * Returns a random number in the range provided.
 * @param {number} lower - lower range number.
 * @param {number} higher - higher range number.
 * @return {number} random number in range.
 */
function getRandomNumberInRange(lower, higher) {
  if (isNaN(lower) || isNaN(higher)) return 0; //TODO: should return error

  if (lower > higher) return 0; //TODO: should return error

  // all good, we have what we need
  return Math.floor(Math.random() * (higher - lower) + lower);
}

/**
 * Returns a random word from the passed array.
 * @param {string[]} array - list of words to choose from.
 * @return {string}  a word of array.
 */
export function getRandomWordFromArray(array) {
  if (!Array.isArray(array) || array.length === 0) return "";

  const randomIndex = getRandomNumberInRange(0, array.length - 1);

  return array[randomIndex];
}
