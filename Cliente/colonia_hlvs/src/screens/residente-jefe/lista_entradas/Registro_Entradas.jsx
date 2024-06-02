import Menu from "../../../components/menu/menu";
import './Registro_Entradas.css'

import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import DataGridDemo from '../../../components/table/table';

const Registro_Entradas = () => {
    const columns = [
        {
            field: 'Nombre',
            headerName: 'Nombre',
            type: 'string',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            editable: false,
        },
        {
            field: 'Fecha',
            headerName: 'Fecha',
            type: 'date',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            editable: false,
        },
        {
            field: 'Hora',
            headerName: 'Hora',
            type: 'time',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            editable: false,

        },
    ];

    const rows = [
        { id: 1, Nombre: 'Jose Guidos', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
        { id: 2, Nombre: 'Denys Campos', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
        { id: 3, Nombre: 'Mauri Aguilar', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
        { id: 4, Nombre: 'Nestor Aldana', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
        { id: 5, Nombre: 'Douglas Hernandez', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
        { id: 6, Nombre: 'Daniel Juarez', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
        { id: 7, Nombre: 'Lee Fuentes', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
        { id: 8, Nombre: 'Gabriela Reynosa', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
        { id: 9, Nombre: 'Alejandro Gomez', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
        { id: 10, Nombre: 'Andrea Escobar', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },

    ];

    const buttonsVisit = [{ icon: <InsertInvitationRoundedIcon />, name: 'Invitacion Simple', path: '/invitacion-simple' },
    { icon: <EventRepeatRoundedIcon />, name: 'Invitacion Recurrente', path: '/invitacion-recurrente' },
    { icon: <ChecklistRtlRoundedIcon />, name: 'Solicitudes', path: '/myprofile' },
    { icon: <HomeRoundedIcon />, name: 'Gestionar hogar', path: '/' },
    { icon: <PersonRoundedIcon />, name: 'Mi perfil', path: '/myprofile' },
    { icon: <LogoutRoundedIcon />, name: 'Cerrar Sesion', path: '/' },]


    return (
        <div className='father'>
            <div className='Left'>
                <h2>Registro entrada a casa</h2>

                <div className="table-container table-container-secondary">
                    <DataGridDemo columns={columns} rows={rows} />
                </div>

            </div>
            <div className='Right'>
                <Menu buttons={buttonsVisit} className='funca' />
            </div>
        </div>
    )
}

export default Registro_Entradas;
