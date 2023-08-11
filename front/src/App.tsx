import './App.css'
import GlobalStyle from './components/global/Global'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import TalentChoice from './components/talents/TalentChoice'
import CogiHouse from './components/houses/CogiHouse';
import PixelHouse from './components/houses/PixelHouse';
import DataHouse from './components/houses/DataHouse';
import VisioHouse from './components/houses/VisioHouse';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/talent' element={<TalentChoice />} />
        <Route path='/cogi' element={<CogiHouse />} />
        <Route path='/pixel' element={<PixelHouse />} />
        <Route path='/data' element={<DataHouse />} />
        <Route path='/visio' element={<VisioHouse />} />
      </Routes>
    </>
  )
}

export default App
