import './App.css'
import GlobalStyle from './components/global/Global'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import TalentChoice from './components/talents/TalentChoice'
import House from './components/houses/House';

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/talent' element={<TalentChoice />} />
        <Route path='/house' element={<House />} />
      </Routes>
    </>
  )
}

export default App
