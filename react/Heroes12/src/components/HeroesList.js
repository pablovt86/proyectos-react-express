import { getHeroesByEditorial } from "../helpers/getHeroesByEditorial"
import { HeroeCard } from "./HeroeCard";

export const HeroesList = ({editorial}) => {

  const heroes = getHeroesByEditorial(editorial);

  return (
    
    <div className="row animate__animated animate__fadeIn">

      {
        heroes.map(heroe => (
          <HeroeCard
            key={heroe.id}
            {...heroe}
          />
        ))  
      }

    </div>
  )
}
