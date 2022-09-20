import React from 'react'
import { heroes } from '../data/heroes'

export const gerHeroById = (id) => {
  // console.log(id);
  return heroes.find(hero => hero.id === id);
}
