import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }


  // Obtenemos a los heroes y comparamos su publisher con el que nos venga
  let heroesList = heroes.filter(heroe => heroe.publisher === publisher);

  console.log(heroesList)

  return heroesList;
}
