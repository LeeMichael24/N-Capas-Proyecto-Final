import IconButton from '../../../components/buttons/IconButton/IconButton';
import Menu from '../../../components/menu/menu';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//MUI
import { TextField } from '@mui/material';
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


//Styles
import '../dashboard/dashboard.css';
import'./Invitation.css';
import Navbar from '../../../components/navbar/navbar';

function SingleInvitation(){
    // const [selectedDate, handleDateChange] = useState(new Date());

    const notify = () => {
        console.log('Invitacion solicitada con exito')
        toast.success("Invitacion solicitada con exito", {
            position: "top-right",
            closeOnClick: true
        });
    };

    const buttonsVisit = [
        { icon: <HomeRoundedIcon />, name: "Inicio", path: "/dashboard"},
        { icon: <InsertInvitationRoundedIcon />, name: "Invitacion Simple", path: "/invitacion-simple",},
        { icon: <EventRepeatRoundedIcon />, name: "Invitacion Recurrente", path: "/invitacion-recurrente",},
        { icon: <PersonRoundedIcon />, name: "Mi perfil", path: "/myprofile" },
        { icon: <LogoutRoundedIcon />, name: "Cerrar Sesion", path: "/" },
      ];

    return(
        <>
            <Navbar/>
            <div className='father'>
                <div className='Left'>
                    <h2>Solicitar invitacion unica</h2>
                    <TextField
                        variant='outlined'
                        label='Nombre'
                        className='input longText'
                        />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className='longText input' label='Fecha'/>
                    </LocalizationProvider>
                    <div className='time_pickers'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                            label='Hora de Inicio'
                            className='time input'/>
                            <TimePicker
                            label='Hora Final'
                            className='time input'/>
                        </LocalizationProvider>
                    </div>
                    <IconButton icon={null} text={'Solicitar Invitacion'} onClick={notify}/>
                </div>
                <div className='Right'>
                    <Menu buttons={buttonsVisit} className='funca'/>
                </div>
            </div>
        </>
    )
}

export default SingleInvitation;