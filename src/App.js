
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Nevabar from './Nevabar';
import Skilii from './Skilii';
import Contect from './Contect';


import Raman from './Raman';


function App() {
  return (
    <>
     <Nevabar/>
     <Routes>
       <Route exact path="/about" element = {<About/>} />
       <Route exact path="/home"  element = {<Raman/>} />
       <Route exact path="/skill" element = {<Skilii/>} />
       <Route  path="/contect"  element = {<Contect/>} />

     </Routes>
    </>
    
  );
}

export default App;
