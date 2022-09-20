import { Navigate, Routes, Route } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { DcPage } from '../pages/DcPage'
import { HeroPage } from '../pages/HeroPage'
import { MarvelPage } from '../pages/MarvelPage'
import { SearchPage } from '../pages/SearchPage'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar /> {/*Ponemos el navbar aquí ya que solo queremos que aparezca cuando esté logado */}

      <div className="container">
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:heroid' element={<HeroPage />} />



          <Route path='/' element={<Navigate to="/marvel" />} />

        </Routes>
      </div>
    </>
  )
}
