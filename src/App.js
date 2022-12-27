import './App.css';
import {Route, Routes ,BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import  Inicio  from './paguinas/Inicio';
import  Contacto from './paguinas/Contacto';
import Destacado from './paguinas/Destacado';
import Informacion from './paguinas/Informacion';
import CardWidget from './components/CartWidget';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 < NavBar/>
 <Routes>
 <Route path='/' element={<Inicio/>}/>
 <Route path='/Contacto' element={<Contacto/>}/>
 <Route path='/Informacion' element={<Informacion/>}/>
 <Route path='/Destacado' element={<Destacado/>}/>
 <Route path='/' element={<CardWidget/>}/>

<Route/>
 </Routes>
 </BrowserRouter>

    
    </div>
  );
}

export default App;
