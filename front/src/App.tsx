import './App.css'
import GlobalStyle from '@components/styled/global/GlobalStyle'
import { Routes, Route } from 'react-router-dom';
import Home from '@components/home/Home'
import TalentChoice from '@components/talents/TalentChoice'
import Team from '@components/teams/Team';
import ScenarioStage from '@components/stage/ScenarioStage';

import useSWR from 'swr';
import { gameFetcher } from './helpers/fetcher';
import { Provider } from './context/GameContext';
import { Game } from './types';
import Validation from '@components/validation/Validation';
import End from '@components/end/End';

function App() {

  const { data, isLoading } = useSWR<Game>('devFest', gameFetcher);

  return (<>
    {
      data &&
      <Provider value={data}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/talent' element={<TalentChoice />} />
          <Route path='/team' element={<Team />} />
          <Route path='/stage' element={<ScenarioStage />} />
          <Route path='/validation' element={<Validation />} />
          <Route path='/end' element={<End />} />
        </Routes>
      </ Provider>
    }
    {
      isLoading &&
      <p>Loading...</p>
    }
  </>
  )

}

export default App
