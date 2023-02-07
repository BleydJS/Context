import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import './App.css';


//pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <h1>Context</h1>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='Products' element = {<Products/>}/>
        <Route path='About' element = {<About/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
