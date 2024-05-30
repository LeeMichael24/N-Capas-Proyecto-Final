import IconButton from '../../../components/buttons/IconButton/IconButton';
import './resident-qr.css'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import Menu from '../../../components/menu/menu';

import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function ResidentQr(){

    const buttonsVisit = [{icon: <InsertInvitationRoundedIcon/> , name: 'Invitacion Simple', path:'/invitacion-simple'},
    {icon: <EventRepeatRoundedIcon/> , name: 'Invitacion Recurrente', path:'/invitacion-recurrente'},
    {icon: <PersonRoundedIcon/> , name: 'Mi perfil', path:'/admin'},
    {icon: <LogoutRoundedIcon/> , name: 'Cerrar Sesion', path:'/'},]

    return (
        <div className='father'>
            <div className='Left'>
                <h2> Tu codigo-QR</h2>
                <div className='Hint'>
                    <ErrorOutlineRoundedIcon className='icon'/>
                    Tu codigo-QR se ha generado correctamente, acercate al escaner para entrar.
                </div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png' alt='QR' className='myQR'/>
                <IconButton icon={<QrCode2RoundedIcon/>} text='Refrescar'/>
             </div>
             <div className='Right'>
                 <Menu buttons={buttonsVisit} className='funca'/>
             </div>
        </div>
    )
}

export default ResidentQr;