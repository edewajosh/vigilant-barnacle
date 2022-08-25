import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { LoginProvider } from '../context/LoginContext';


const PrivateRoute = () => {
    const [token,] = useContext(LoginProvider)
    console.log(token.length)
    return token.length > 0 ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute;