import { heroes } from "../data/heroes";

export const getHeroesByEditorial = (editorial) => {
  
    return heroes.filter(heroe => heroe.publisher === editorial)

}
