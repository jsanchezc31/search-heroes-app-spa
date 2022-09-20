import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { gerHeroById } from '../helpers/gerHeroById';

export const HeroPage = () => {

  const navigate = useNavigate();


  const params = useParams();
  // console.log(params);

  const { heroid } = params;
  // console.log(heroid);

  // const hero = gerHeroById(heroid);
  // utilizamos el useMemo para memorizar los valores y solo se actualize cuando cambie el id (dependencias)
  const hero = useMemo(() => gerHeroById(heroid), [heroid]);
  // console.log(hero)

  const onNavigateBack = () => {

    navigate(-1); //vuelve a la pantalla anterior, cuidado que nos puede sacar de nuestra app
    // navigate("/marvel");

  }


  if (!hero) {
    // return <>404 not found</>
    return <Navigate to="/marvel" />
  }

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img
          src={`/assets/heroes/${heroid}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>
      <div className="col-8">
        <h3>HeroPage</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego} </li>
          <li className='list-group-item'><b>Publisher:</b> {hero.publisher} </li>
          <li className='list-group-item'><b>First appearance:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3">
          <p>{hero.characters}</p>
        </h5>

        <button
          className='btn btn-outline-primary'
          onClick={onNavigateBack}
        >
          Volver
        </button>

      </div>

    </div >
  )
}
