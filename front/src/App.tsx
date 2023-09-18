import './App.css'
import GlobalStyle from './components/styled/global/GlobalStyle'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import TalentChoice from './components/talents/TalentChoice'
import Team from './components/teams/Team';
import Stage from './components/stage/Stage';

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/talent' element={<TalentChoice />} />
        <Route path='/team' element={<Team />} />
        <Route path='/stage' element={<Stage />} />
      </Routes>
    </>
  )
}

export default App
