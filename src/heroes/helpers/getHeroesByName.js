import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {

  name = name.toLocaleLowerCase().trim()

  if (name.length === 0) return [];

  // return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))

  let resultadoHeroes = heroes.filter(hero => {
    return hero.superhero.toLocaleLowerCase().includes(name)
  })

  return resultadoHeroes;

}
