import './App.css';
import Forms from './components/Forms';

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Historia from './pages/Historia'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* <Forms name = "ciei" email = "cieimmail@gmail.com"/> */}

    

    <BrowserRouter>
      
      <NavBar/>

      <Routes >

        <Route path="/" element={ <Home/>} />
        <Route path="/Historia" element={ <Historia/>} />
        <Route path="/pages/Cadastro" element={ <Cadastro/>} />
        
      </Routes>

      <Footer/>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
