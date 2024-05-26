import { TextField } from '@mui/material';
import './singleInvitation.css';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import IconButton from '../../../../components/buttons/IconButton/IconButton';

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
                <TextField
                    variant='outlined'
                    label='Fecha'
                    className='input longText'
                />
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