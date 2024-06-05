import IconButton from '../../../components/buttons/IconButton/IconButton';
import Menu from '../../../components/menu/menu';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//MUI
import { TextField } from '@mui/material';
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

//Styles
import '../dashboard/dashboard.css';
import'./Invitation.css';
import Navbar from '../../../components/navbar/navbar';

import residentInChargeBtn from '../../../assets/staticInfo/buttonEncargadoArray';

function SingleInvitation(){
    // const [selectedDate, handleDateChange] = useState(new Date());

    const notify = () => {
        console.log('Invitacion solicitada con exito')
        toast.success("Invitacion solicitada con exito", {
            position: "top-right",
            closeOnClick: true
        });
    };

    return(
        <>
            <Navbar/>
            <div className='father'>
                <div className='Left'>
                    <h2 className='mauri'>Solicitar invitacion unica</h2>
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
                            label='Hora Inicio'
                            className='time input'/>
                            <TimePicker
                            label='Hora Fin'
                            className='time input'/>
                        </LocalizationProvider>
                    </div>
                    <IconButton icon={null} text={'Solicitar Invitacion'} onClick={notify}/>
                </div>
                <div className='Right'>
                    <Menu buttons={residentInChargeBtn} className='funca'/>
                </div>
            </div>
        </>
    )
}

export default SingleInvitation;