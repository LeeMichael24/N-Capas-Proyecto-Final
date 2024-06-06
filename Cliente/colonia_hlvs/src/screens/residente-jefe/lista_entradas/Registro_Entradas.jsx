import Menu from "../../../components/menu/menu";
import './Registro_Entradas.css'

import residentInChargeBtn from '../../../assets/staticInfo/buttonEncargadoArray';
import DataGridDemo from '../../../components/table/table';
import Navbar from "../../../components/navbar/navbar";
import { Fab, useMediaQuery } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';

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

    return (
        <>
            <Navbar />
            {matches && (
                <Fab size='medium' color='primary' className='fab' aria-label='Ir al menu' sx={fabStyle} onClick={handleClick}>
                    <WidgetsIcon/>
                </Fab>
            )}
            <div className='father'>
                <div className='Left'>
                    <h2>Registro entrada a casa</h2>

                    <div className="table-container table-container-secondary">
                        <DataGridDemo columns={columns} rows={rows} />
                    </div>

                </div>
                <div className='Right' id='hastaAbajoBaby'>
                    <Menu buttons={residentInChargeBtn} className='funca' />
                </div>
            </div>
        </>
    )
}

export default Registro_Entradas;
