import { getHeroeById } from "../helpers/getHeroeById";
import { Navigate, useNavigate, useParams } from 'react-router-dom';


export const Heroe = () => {

  const {heroeID} = useParams();
  const navigate = useNavigate();

  const {superhero,publisher,alter_ego,first_appearance} = getHeroeById(heroeID);


  return (
    <div className="row mt-4  animate__animated animate__fadeIn">
      <div className='col-4'>
        <img
          src={`../assets/heroes/${heroeID}.jpg`}
          alt=""
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Nombre real:</b> {alter_ego}</li>
          <li className="list-group-item"><b>Editorial:</b> {publisher}</li>
          <li className="list-group-item"><b>Aparición:</b> {first_appearance}</li>
        </ul>
        <button
          className='btn btn-outline-dark'
          onClick={() => navigate(-1)}
        >
          Ir atrás
        </button>
      </div>

    </div>
  )
}
