import {useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from "./components/NavBar";
import PrivateRoute from './components/PrivateRoute';
import { LoginProvider } from './context/LoginContext';
import About from './pages/About';
import AddService from './pages/AddService';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  const [token, setToken] = useState([])

  return (
    <LoginProvider.Provider value={[token, setToken]}>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />}/>
          <Route path='/dashboard' element={ <PrivateRoute />} >
            <Route path='/dashboard' element={<Dashboard />}/>
          </Route>
          <Route path='/add-service' element={ <PrivateRoute />} >
            <Route path='/add-service' element={<AddService />}/>
          </Route>
          <Route path='/about' element={<About />} />
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
        <NavBar />
      </Router>
    </LoginProvider.Provider>
  );
}

export default App;
