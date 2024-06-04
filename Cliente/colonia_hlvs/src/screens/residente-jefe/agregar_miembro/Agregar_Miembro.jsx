import IconButton from '../../../components/buttons/IconButton/IconButton'
import Menu from "../../../components/menu/menu"

import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CardContent from '@mui/material/CardContent';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { TextField } from '@mui/material';
import { useState } from 'react';
import DataGridDemo from '../../../components/table/table';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';

// Styles
import "../../resident/dashboard/dashboard.css"
import './Agregar_Miembro.css';


const Agregar_Miembro = () => {
    const notify = () => {
        console.log('Invitacion solicitada con exito')
        toast.success("Invitacion solicitada con exito", {
            position: "top-right",
            closeOnClick: true
        });
    };

    const [editMode, setEditMode] = useState(false);
    const [residente, setResidente] = useState('Mauricio Aguilar');
    const [capacidad, setCapacidad] = useState('3');

    const [tempCapacidad, setTempCapacidad] = useState(capacidad);
    const [nuevoResidente, setNuevoResidente] = useState('');


    // const handleEditClick = () => {
    //     setEditMode(true);
    // };

    // const handleSaveClick = () => {
    //     setEditMode(false);
    // };

    // const handleCapacidadChange = (event) => {
    //     setTempCapacidad(Number(event.target.value));
    // };

    const handleDelete = (id) => {
        setRows(rows.map(row => row.id === id ? { ...row, Nombre: '' } : row));
    };

    const handleResidenteChange = (event) => {
        setNuevoResidente(event.target.value);
    };

    const columns = [
        {
            field: 'Contador',
            headerName: 'Residente',
            type: 'number',
            flex: 0,
            headerAlign: 'center',
            align: 'center',
            editable: false,
        },
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
            field: 'Eliminar',
            headerName: '',
            flex: 0,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <IconButton
                    className="icon-delete"
                    onClick={() => handleDelete(params.row.id)}
                    icon={<DeleteOutlineIcon sx={{ color: '#0d1b2a' }} />}>
                </IconButton>
            ),
        },
    ];

    const [rows, setRows] = useState([
        { id: 1, Contador: 1, Nombre: "Mauricio Aguilar", },
        { id: 2, Contador: 2, Nombre: "Daniel Quintanilla", },
        { id: 3, Contador: 3, Nombre: "Carlos Suria", },
    ]);


    const handleGuardarResidente = () => {
        if (rows.filter(row => row.Nombre !== '').length >= capacidad) {
            toast.error('No puedes agregar más residentes porque la casa está llena.');
        } else {
            const newRows = [...rows];
            const firstEmptyRow = newRows.find(row => row.Nombre === '');
            if (firstEmptyRow) {
                firstEmptyRow.Nombre = nuevoResidente;
                setRows(newRows);
                setNuevoResidente('');
                toast.success('Se ha registrado un nuevo residente.');
            }
        }
    };

    const buttonsVisit = [{ icon: <InsertInvitationRoundedIcon />, name: 'Invitacion Simple', path: '/invitacion-simple' },
    { icon: <EventRepeatRoundedIcon />, name: 'Invitacion Recurrente', path: '/invitacion-recurrente' },
    { icon: <ChecklistRtlRoundedIcon />, name: 'Solicitudes', path: '/myprofile' },
    { icon: <HomeRoundedIcon />, name: 'Gestionar hogar', path: '/' },
    { icon: <PersonRoundedIcon />, name: 'Mi perfil', path: '/myprofile' },
    { icon: <LogoutRoundedIcon />, name: 'Cerrar Sesion', path: '/' },]


    return (
        <div className='father'>
            <div className='Left'>
                <h2>Agregar miembro</h2>
                
                <div className='casa-info-responsable-tabla  residenteJ-cirt'>
                    <DataGridDemo className="formato" columns={columns} rows={rows} />
                </div>
                
                <div className="agregar-residente residenteJ-ar">
                    <CardContent className='CardContent'>

                        <h1 className='casa-title residenteJ-ct'>Agregar Residente</h1>

                        <div className='text-field-agregar '>
                            <TextField id="outlined-basic" label="Nombre del Residente" variant="outlined" onChange={handleResidenteChange} value={nuevoResidente} />
                            <IconButton className="icon-save-info" text={"Guardar"} onClick={handleGuardarResidente} />
                        </div>

                    </CardContent>
                </div>

            </div>
            <div className='Right'>
                <Menu buttons={buttonsVisit} className='funca' />
            </div>
        </div>
    )
}


export default Agregar_Miembro;