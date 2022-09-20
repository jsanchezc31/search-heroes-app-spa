import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPages } from '../auth/pages/LoginPages'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { Navbar } from '../ui/components/Navbar'

export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path='login' element={<LoginPages />} />

        {/* Si la ruta no es login que valla a HeroesRoutes y ya que se encargue de ello */}
        <Route path='/*' element={<HeroesRoutes />} />

      </Routes>
    </>
  )
}
