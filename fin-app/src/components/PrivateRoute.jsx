import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { LoginProvider } from '../context/LoginContext';


const PrivateRoute = () => {
    const [token,] = useContext(LoginProvider)
    
    return token['access'] && token['access'] ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute;