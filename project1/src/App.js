import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Qualifications from './Pages/Qualifications';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Skills from './Pages/Skills';
import Aboutus from './Pages/Aboutus';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="Aboutus" element={<Aboutus/>}/>
          <Route path="Qualifications" element={<Qualifications/>}/>
          <Route path="Hobbies" element={<Hobbies/>}/>
          <Route path="Skills" element={<Skills/>}/>
          <Route path="Experience" element={<Experience/>}/>
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
