/* import React from 'react'; */
import { useNavigate } from 'react-router-dom';
import './login.css';
/* import { useUserContext } from '../../contexts/UserContext'; */
import GoogleIcon from '@mui/icons-material/Google';
import Logo from '../../assets/images/Logo.png'


export default function Login() {
    const navigate = useNavigate('');

    const handleSubmit = () => {
        navigate('/vigilanteHome');
    }

    /* const { handleGoogleLogin } = useUserContext(); */

  return (
    <div className='main-container-login'>
        <div className='leftSide'>
            <div className='left-container-login'>
                <h1 className='h1-login-left'>Bienvenido</h1>
                <img  src={Logo} className='image-left-container' />
            </div>
        </div>
        <div className='rigthSide'>
            <div className='rigth-container-login'>
                <h1 className='h1-login-rigth'>Bienvenido</h1>
                <img  src={Logo} className='image-rigth-container' />
                <h1 className='h1-login'>Bienvenido a Colonias HLVS, inicia sesión con Google!</h1>
                {/* esto se reemplaraza con el bottom de google */}
                <button  className='btn-google' onClick={handleSubmit}>
                    <GoogleIcon className='colorGoogle'/>
                    <h3 className='h3Google'>Sign in with Google</h3>
                </button>
                <h3 className='h3-copy'>© 2024 Todos los derechso reservados</h3>
            </div>
        </div>
    </div>
  )
}

