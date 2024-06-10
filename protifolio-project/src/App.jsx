import React from 'react';
import './App.css';
import NAV from './assets/COMPONANT/NAV';
import Header from './assets/COMPONANT/Header';
import Skills from './assets/COMPONANT/Skills';
import About from './assets/COMPONANT/About';
import Projects from './assets/COMPONANT/Projects';
import TEMPLETS from './assets/COMPONANT/TEMPLETS';
import ENDING from './assets/COMPONANT/ENDING';
import Comments from './assets/COMPONANT/Comments';
import INTRO from './assets/COMPONANT/INTRO';
import CONTACT from './assets/COMPONANT/CONTACT';
import Vooter from './assets/COMPONANT/Vooter';
const App = () => {
  return (
    <div>
     <NAV/>
   <Header/>
   <Skills/>
   <About/>
   <Projects/>
   <TEMPLETS/>
   <ENDING/>
   <Comments/>
   <INTRO/>
   <CONTACT/>
  <Vooter/>
    </div>
  );
}

export default App;
