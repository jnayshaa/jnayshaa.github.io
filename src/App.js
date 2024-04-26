// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
// import OtherInfo from './components/OtherInfo';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/experience" element={Experience} />
          {/* <Route path="/other-info" element={OtherInfo} /> */}
          <Route path="/contact" element={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
