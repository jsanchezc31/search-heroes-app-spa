import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPages } from '../auth/pages/LoginPages'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { Navbar } from '../ui/components/Navbar'
import { PrivateRouter } from './PrivateRouter'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>

      <Routes>


        {/* <Route path='login' element={
          <PublicRoute>
            <LoginPages />
          </PublicRoute>
        } /> */}


        <Route path='login/*' element={
          <PublicRoute>
            {/* Así podemos tener varias rutas */}
            <Routes>
              <Route path='/*' element={<LoginPages />} />
              {/* <Route path='login' element={<LoginPages />} /> */}
            </Routes>
          </PublicRoute>
        } />

        {/* <Route path='login' element={<LoginPages />} /> */}

        {/* Si la ruta es privada*/}
        <Route path='/*' element={
          <PrivateRouter>
            <HeroesRoutes />
          </PrivateRouter>
        } />

        {/* Si la ruta no es login que valla a HeroesRoutes y ya que se encargue de ello */}
        {/* <Route path='/*' element={<HeroesRoutes />} /> */}

      </Routes>
    </>
  )
}
