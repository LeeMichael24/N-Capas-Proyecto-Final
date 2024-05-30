import React from 'react';
import IconButton from '../../../components/buttons/IconButton/IconButton';
import DayButton from '../../../components/buttons/dayButton/dayButton';
import Menu from '../../../components/menu/menu';
//MUI
import { TextField } from '@mui/material';
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

//sTYLES
import './Invitation.css'
import '../dashboard/dashboard.css';


function RecurrntInvitation() {

    const buttonsVisit = [{icon: <InsertInvitationRoundedIcon/> , name: 'Invitacion Simple', path:'/invitacion-simple'},
    {icon: <EventRepeatRoundedIcon/> , name: 'Invitacion Recurrente', path:'/invitacion-recurrente'},
    {icon: <PersonRoundedIcon/> , name: 'Mi perfil', path:'/admin'},
    {icon: <LogoutRoundedIcon/> , name: 'Cerrar Sesion', path:'/'},]

    return(
        <div className='father'>
            <div className='Left'>
                <h2>Solicitar invitacion unica</h2>
                <TextField
                    variant='outlined'
                    label='Nombre'
                    className='input longText'
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className='longText input' label='Fecha Inicio'/>
                    <DatePicker className='longText input' label='Fecha Fin'/>
                </LocalizationProvider>
                <div className='days'>
                    <p>Especifique los dias</p>
                    <DayButton text={'L'}/>
                    <DayButton text={'M'}/>
                    <DayButton text={'M'}/>
                    <DayButton text={'J'}/>
                    <DayButton text={'V'}/>
                    <DayButton text={'S'}/>
                    <DayButton text={'D'}/>
                </div>
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
                <IconButton icon={null} text={'Solicitar Invitacion'} />
            </div>
            <div className='Right'>
                <Menu buttons={buttonsVisit} className='funca'/>
            </div>
        </div>
    )
}

export default RecurrntInvitation;