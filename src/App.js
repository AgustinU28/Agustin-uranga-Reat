import './App.css';
import {Route, Routes ,BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import  Inicio  from './paguinas/Inicio';
import  Contacto from './paguinas/Contacto';
import Destacado from './paguinas/Destacado';
import Informacion from './paguinas/Informacion';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 < NavBar/>
 <Routes>
 <Route patch='/' element={<Inicio/>}/>
 <Route patch='/Contacto' element={<Contacto/>}/>
 <Route patch='/Informacion' element={<Informacion/>}/>
 <Route patch='/Destacado' element={<Destacado/>}/>
<Route/>
 </Routes>
 </BrowserRouter>

    
    </div>
  );
}

export default App;
