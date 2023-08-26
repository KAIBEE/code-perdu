import './App.css'
import GlobalStyle from './components/global/Global'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import TalentChoice from './components/talents/TalentChoice'
import House from './components/houses/House';
import MissionAcceptation from './components/stories/commonStories/MissionAcceptation';
import Introduction from './components/stories/commonStories/Introduction';
import FindLetter from './components/stories/commonStories/FindLetter';

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/talent' element={<TalentChoice />} />
        <Route path='/house' element={<House />} />
        <Route path='/missionAcceptation' element={<MissionAcceptation />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/findLetter' element={<FindLetter />} />
      </Routes>
    </>
  )
}

export default App
