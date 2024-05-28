import IconButton from '../../../components/buttons/IconButton/IconButton';

//MUI
import { TextField } from '@mui/material';
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

//Styles
import '../dashboard/dashboard.css';
import'./Invitation.css';

function SingleInvitation(){
    // const [selectedDate, handleDateChange] = useState(new Date());

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
                <IconButton icon={null} text={'Solicitar Invitacion'} />
            </div>
            <div className='Right'>
                Aqui va el menu de @Limon.
            </div>
        </div>
    )
}

export default SingleInvitation;