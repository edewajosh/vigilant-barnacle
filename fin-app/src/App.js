import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from "./components/NavBar";
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/about' element={<About />} />
        </Routes>
        <NavBar />
      </Router>
    </>
  );
}

export default App;
