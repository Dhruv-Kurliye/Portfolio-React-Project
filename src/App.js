import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Playlist from './Components/Playlist';
import Footer from './Components/Footer';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div ><Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/playlist' element={<Playlist/>}/>
    </Routes>
    
    <Footer></Footer>
    </div>
  );
}

export default App;
