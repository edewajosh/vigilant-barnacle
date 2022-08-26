import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import { LoginProvider } from '../context/LoginContext';


const API_URL = 'http://127.0.0.1:8000/api/token/'

const SignIn = () => {

    const [, setToken] = useContext(LoginProvider)

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData ] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const userCredential = await fetch( API_URL,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'email': email, 'password': password})
            })
            const userDetails = await userCredential.json()
            console.log('Line 45', userDetails)
            if(userDetails['access']){
                navigate('/dashboard')
                setToken(userDetails)
            } 
        } catch (error) {
           console.error('Bad User Credentials')
        }

    }
  return (
    <>
        <div className='pageContainer'>
            <header>
                <p className='pageHeader'>
                    Welcome Back!
                </p>
            </header>
            <form onSubmit={onSubmit}>
                <input 
                    type="email" 
                    className="emailInput" 
                    id="email" 
                    placeholder='Email' 
                    value={email} 
                    onChange={onChange}
                />
                <div className='passwordInputDiv'>
                    <input 
                        type={showPassword ? 'text': 'password'} 
                        className="passwordInput"
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={onChange}
                     />
                     <img 
                        src={visibilityIcon} 
                        alt="show password" 
                        className='showPassword' 
                        onClick={() => setShowPassword((prevState) => !prevState)}
                     />
                </div>
                <Link to='/forgot-password' className='forgotPasswordLink'>
                    Forgot Password
                </Link>
                <div className='signInBar'>
                    <p className='signInText'>
                        Sign In
                    </p>
                    <button className="signInButton">
                        <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                    </button>
                </div>
            </form>
            {/* Google OAuth */}
           {/* <OAuth/> */}
            <Link to='/sign-up' className='registerLink'>Sign Up Instead</Link>
        </div>
    </>
  )
}

export default SignIn