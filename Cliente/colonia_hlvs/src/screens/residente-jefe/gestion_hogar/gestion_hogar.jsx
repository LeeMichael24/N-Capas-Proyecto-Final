import IconButton from '../../../components/buttons/IconButton/IconButton'
import Menu from "../../../components/menu/menu"

import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

// Styles
import '../../resident/dashboard/dashboard.css'
import './gestion_hogar.css'

const residenteCasa = {
    owner: "Lee Michael",
    houseNumber: 35,
    members: [
        "Maurika Aguilar",
        "Flavio Josefo",
        "Denys Campes"
    ]
}

const GestionHogar = () => {
    const buttonsVisit = [{ icon: <InsertInvitationRoundedIcon />, name: 'Invitacion Simple', path: '/invitacion-simple' },
    { icon: <EventRepeatRoundedIcon />, name: 'Invitacion Recurrente', path: '/invitacion-recurrente' },
    { icon: <ChecklistRtlRoundedIcon />, name: 'Solicitudes', path: '/myprofile' },
    { icon: <HomeRoundedIcon />, name: 'Gestionar hogar', path: '/' },
    { icon: <PersonRoundedIcon />, name: 'Mi perfil', path: '/myprofile' },
    { icon: <LogoutRoundedIcon />, name: 'Cerrar Sesion', path: '/' },]


    return (
        <div className='father'>
            <div className='Left'>
                <h2>Gestionar mi hogar</h2>

                <div className='members'>
                    <h3 className='membersTitle'>Integrantes Casa #{residenteCasa.houseNumber}</h3>
                    {
                        residenteCasa.members.map(member => {
                            return <p key={member}> {member} </p>;
                        })
                    }
                </div>

                <IconButton icon={<AddRoundedIcon />} text={'Agregar miembro a familia'} className="samesize"/>
                <IconButton icon={<FormatListBulletedRoundedIcon />} text={'Revisar lista de entrada'} className="samesize"/>
            </div>
            <div className='Right'>
                <Menu buttons={buttonsVisit} className='funca' />
            </div>
        </div>
    )
}

export default GestionHogar;