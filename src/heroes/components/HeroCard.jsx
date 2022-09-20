import { Link } from "react-router-dom"

const CharactersByHero = ({ hero }) => {
  if (hero.alter_ego === hero.characters) return (<></>);

  return (<p>{hero.characters}</p>)
}


export const HeroCard = ({ hero }) => {

  const heroImgUrl = `/assets/heroes/${hero.id}.jpg`

  // const charactersByHero = (<p>{hero.characters}</p>);


  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">

        <div className="row no-gutters">

          <div className="col-4 ">
            <img src={heroImgUrl} className="card-img" alt={hero.superhero} />
          </div>

          <div className="col-8">

            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">{hero.alter_ego}</p>

              {
                // (hero.alter_ego !== hero.characters) && (charactersByHero)
                <CharactersByHero hero={hero} />
              }

              <p className="card-text">
                <small>
                  {hero.first_appearance}
                </small>
              </p>

              <Link to={`/hero/${hero.id}`} >
                Mas..
              </Link>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
