
import { Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact'
import Services from './Services'
import About from './About'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={Home}/> */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
