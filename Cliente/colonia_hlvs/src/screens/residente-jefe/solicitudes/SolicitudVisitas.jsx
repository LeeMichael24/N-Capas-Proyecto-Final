import Menu from "../../../components/menu/menu";
import './SolicitudesVisitas.css';

import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InvitacionUnica from "./InvitacionUnica/InvitacionUnica";
import InvitacionRecurrente from "./InvitacionRecurrente/InvitacionRecurrente";
import SolicitudButton from "./AuxButtons/SolicitudButton";


const invitaciones = [
    {
        id: 1,
        tipo: 'unica',
        fecha: '6/2/2024',
        hora: '12:30 pm',
        nombre: 'Pedro Paramo'
    },
    {
        id: 2,
        tipo: 'recurrente',
        fechaInicio: '6/2/2024',
        fechaFin: '6/25/2024',
        hora: '12:30 - 3:00 pm',
        nombre: 'Pedro Paramo',
        dias: ['L', 'M']
    },
];


const SolicitudVisitas = () => {

    const buttonsVisit = [{ icon: <InsertInvitationRoundedIcon />, name: 'Invitacion Simple', path: '/invitacion-simple' },
    { icon: <EventRepeatRoundedIcon />, name: 'Invitacion Recurrente', path: '/invitacion-recurrente' },
    { icon: <ChecklistRtlRoundedIcon />, name: 'Solicitudes', path: '/myprofile' },
    { icon: <HomeRoundedIcon />, name: 'Gestionar hogar', path: '/' },
    { icon: <PersonRoundedIcon />, name: 'Mi perfil', path: '/myprofile' },
    { icon: <LogoutRoundedIcon />, name: 'Cerrar Sesion', path: '/' },]

    return (
        <div className='father'>
            <div className='Left'>
                <h2>Solicitudes de visita</h2>

                {invitaciones.map((invitacion) => {
                    if (invitacion.tipo === 'unica') {
                        return (
                            <div className="card-unica-recurrente">
                                <InvitacionUnica
                                    key={invitacion.id}
                                    fecha={invitacion.fecha}
                                    hora={invitacion.hora}
                                    nombre={invitacion.nombre}
                                />
                                <SolicitudButton />
                            </div>
                        );
                    } else if (invitacion.tipo === 'recurrente') {
                        return (
                            <div className="card-unica-recurrente">
                                <InvitacionRecurrente
                                    key={invitacion.id}
                                    fechaInicio={invitacion.fechaInicio}
                                    fechaFin={invitacion.fechaFin}
                                    hora={invitacion.hora}
                                    nombre={invitacion.nombre}
                                    dias={invitacion.dias}
                                />
                                <SolicitudButton />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}

            </div>
            <div className='Right'>
                <Menu buttons={buttonsVisit} className='funca' />
            </div>
        </div>
    )
}


export default SolicitudVisitas;