/* import React from 'react'; */
import './login.css';
import { useUserContext } from '../../contexts/UserContext';


export default function Login() {

    const { handleGoogleLogin } = useUserContext();

  return (
    <div className='main-container'>
        <div className='leftSide'>
            <div className='left-container'>
                <h1 className='h1-login'>Bienvenido</h1>
                <image className='image-left-container'></image>
            </div>
        </div>
        <div className='rigthSide'>
            <div className='rigth-container'>
                <h1 className='h1-login'>Bienvenido a Colonias HLVS, inicia sesión con Google!</h1>
                <button onClick={() => handleGoogleLogin()} className='btn-google'>Sign in with Google</button>
                <h3 className='h3-copy'>© 2024 Todos los derechso reservados</h3>
            </div>
        </div>
    </div>
  )
}

