import React from 'react';
import IconButton from '../../../components/buttons/IconButton/IconButton';
import DayButton from '../../../components/buttons/dayButton/dayButton';
import Menu from '../../../components/menu/menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//MUI
import { Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

//sTYLES
import './Invitation.css'
import '../dashboard/dashboard.css';
import Navbar from '../../../components/navbar/navbar';

import residentInChargeBtn from '../../../assets/staticInfo/buttonEncargadoArray';


function RecurrntInvitation() {

    const weekDays = [{name: 'Lunes', value: 'Monday', label: 'L'}, {name: 'Martes', value: 'Tuesday', label: 'M'}, {name: 'Miercoles', value: 'Wednesday', label: 'M'}, {name: 'Jueves', value: 'Thursday', label: 'J'}, {name: 'Viernes', value: 'Friday', label: 'V'}, {name: 'Sabado', value: 'Saturday', label: 'S'}, {name: 'Domingo', value: 'Sunday', label: 'D'}]

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
                    <h2 className='mauri'>Solicitar invitacion recurrente</h2>
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
                        <p className='days_helper'>Dias de la semana</p>
                        <FormGroup row>
                            {/* <FormControlLabel 
                                value="Monday"
                                control={<Checkbox sx={{color: '#0d1b2a', '&.Mui-checked': {color: '#0d1b2a'},}}/>}
                                label="L"
                                labelPlacement='bottom'
                            /> */}
                            {weekDays.map((day, index) => (
                                <FormControlLabel 
                                    key={index}
                                    value={day.value}
                                    control={<Checkbox sx={{color: '#0d1b2a', '&.Mui-checked': {color: '#0d1b2a'},}} className='custom_box'/>}
                                    label={day.label}
                                    labelPlacement='bottom'
                                    className='custom_check'
                                />
                            ))}
                        </FormGroup>
                        
                    </div>
                    <div className='time_pickers'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                            label='Hora inicio'
                            className='time input'/>
                            <TimePicker
                            label='Hora fin'
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

export default RecurrntInvitation;