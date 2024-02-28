
import './App.css';

import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Teamswitcher from './pages/Teamswitcher';





function App() {
  return (
    <>
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/team' element={<Teamswitcher/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
    </>
  );
}

export default App;
