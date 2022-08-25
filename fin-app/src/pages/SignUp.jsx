import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

const API_URL = "http://127.0.0.1:8000/api/v1/users/users/"

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData ] = useState({
        username: '',
        email: '',
        password: ''
    })

    const {username, email, password} = formData

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
            // const auth = getAuth()
            const userCredential = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'email': email, 'password': password, 'username': username})
            })
            
            if(userCredential.status === 201){
                const formDataCopy = {...formData}
                delete formDataCopy.password
 
                navigate('/')
            }
        } catch (error) {
            console.error("Please check your credentials again")
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
                    type="text" 
                    className="nameInput" 
                    id="username" 
                    placeholder='Name' 
                    value={username} 
                    onChange={onChange}
                />
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
                <div className='signUpBar'>
                    <p className='signUpText'>
                        Sign Up
                    </p>
                    <button className="signUpButton">
                        <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                    </button>
                </div>
            </form>
            {/* Google OAuth */}
            {/* <OAuth /> */}
            <Link to='/sign-in' className='registerLink'>Sign In Instead</Link>
        </div>
    </>
  )
}

export default SignUp