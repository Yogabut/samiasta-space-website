import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FooterComponent  from './components/Footer'
import MainLayout from './main/mainLayout'
import ServiceDetail from './ServiceDetail/serviceDetail'
import GeoDecisionModel from './ServiceDetail/geo'
import LandInvesment from './ServiceDetail/land'
import OptimalisasiPendapatanDaerah from './ServiceDetail/opd'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<MainLayout />} />
            <Route path='/geo-decision-model' element={<GeoDecisionModel />} />
            <Route path='/optimalisasi-pendapatan-daerah' element={<OptimalisasiPendapatanDaerah />} />
            <Route path='/land-invesment' element={<LandInvesment />} />
          </Routes>
          <FooterComponent />
        </Router>
        
        
        
      </div>
    </>
  )
}

export default App
