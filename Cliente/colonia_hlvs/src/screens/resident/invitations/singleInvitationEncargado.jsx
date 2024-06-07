import IconButton from '../../../components/buttons/IconButton/IconButton';
import Menu from '../../../components/menu/menu';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//MUI
import { TextField, Fab, useMediaQuery } from '@mui/material';
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import WidgetsIcon from '@mui/icons-material/Widgets';

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

    const fabStyle = {
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: '#0d1b2a',
        '&:hover': {backgroundColor: '#D2E0FB'}
      };
      
    const matches = useMediaQuery('(max-width:768px)');

    const handleClick = () => {
        const element =  document.getElementById('hastaAbajoBaby');
        if (element) element.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <>
            <Navbar/>
            {matches && (
                <Fab size='medium' color='primary' className='fab' aria-label='Ir al menu' sx={fabStyle} onClick={handleClick}>
                    <WidgetsIcon/>
                </Fab>
            )}
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
                <div className='Right' id='hastaAbajoBaby'>
                    <Menu buttons={residentInChargeBtn} className='funca'/>
                </div>
            </div>
        </>
    )
}

export default SingleInvitation;