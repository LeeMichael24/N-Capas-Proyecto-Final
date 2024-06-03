import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
/* import { useUserContext } from '../../contexts/UserContext'; */
import GoogleIcon from '@mui/icons-material/Google';
import Logo from '../../assets/images/Logo.png'
import { Modal } from '@mui/material';
import IconButton from '../../components/buttons/IconButton/IconButton';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export default function Login() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const navigate = useNavigate('');

    const users = [
        { name: 'Invitado', path: '/InvitadoHome', icon: <IconButton icon={<PersonRoundedIcon />}/>, mail: 'invitado@mail.com' },
        { name: 'Residente', path: '/dashboard', icon: <IconButton icon={<PersonRoundedIcon/>}/>, mail: 'residente@mail.com' },
        { name: 'Encargado', path: '/dashboard', icon: <IconButton icon={<PersonRoundedIcon />}/>, mail: 'encargado@mail.com' }, // to be changed 
        { name: 'Admin', path: '/admin', icon: <IconButton icon={<PersonRoundedIcon/>}/>, mail: 'admin@mail.com' },
        { name: 'Vigilante', path: '/vigilanteHome', icon: <IconButton icon={<PersonRoundedIcon/>}/>, mail: 'vigilante@getMainColorOfGraphicItem.com' },
      ];

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
                <button  className='btn-google' onClick={handleOpen}>
                    <GoogleIcon className='colorGoogle'/>
                    <h3 className='h3Google'>Sign in with Google</h3>
                </button>
                <h3 className='h3-copy'>© 2024 Todos los derechso reservados</h3>
            </div>
        </div>
        {/* Modal de seleccion de cuenta  sera borrado una vez implementada la conexion con google*/}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='login_modal'>
                <h3> Seleccione una cuenta</h3>
                <p className='clarification'>Modal con fines ilustrativos, para poder navegar por la app; Una vez la api implemetada se usara el servicio de google</p>  
                {users.map((user, index) => (
                    <div className='user_roles' onClick={() => navigate(user.path)} key={index}>
                        {user.icon}
                        <div className='user_card'>
                            <h4>{user.name}</h4>
                            <p>{user.mail}</p>
                        </div>
                    </div>
                ))} 
            </div>
        </Modal>

    </div>
  )
}

