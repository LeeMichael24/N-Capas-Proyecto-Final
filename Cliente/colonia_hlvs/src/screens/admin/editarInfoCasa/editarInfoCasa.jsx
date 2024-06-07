import React from 'react';
import Menu from '../../../components/menu/menu';
import Navbar from '../../../components/navbar/navbar';
import './editarInfoCasa.css';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import CardContent from '@mui/material/CardContent';
import IconButton from '../../../components/buttons/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import { useState } from 'react';
import DataGridDemo from '../../../components/table/table';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';





function EditarInfoCasa() {

    const [editMode, setEditMode] = useState(false);
    const [residente, setResidente] = useState('Mauricio Aguilar');
    const [capacidad, setCapacidad] = useState('3');

    const [tempCapacidad, setTempCapacidad] = useState(capacidad);
    const [nuevoResidente, setNuevoResidente] = useState('');


    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
    };

    const handleCapacidadChange = (event) => {
        setTempCapacidad(Number(event.target.value));
    };

    const handleDelete = (id) => {
        setRows(rows.map(row => row.id === id ? { ...row, Nombre: '' } : row));
    };

    const handleResidenteChange = (event) => {
        setNuevoResidente(event.target.value);
    };



    const buttons = [
        { icon: <ShowChartIcon />, name: 'Panel de Control', path: '/admin' },
        { icon: <HolidayVillageIcon />, name: 'Administrar Casa', path: '/admin/administrar-casa' },
        { icon: <LogoutIcon />, name: 'Cerrar sesión', path: '/login' },
      ];


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

    const handleSave = () => {
        if (tempCapacidad < rows.filter(row => row.Nombre !== '').length) {
            toast.error('No puedes reducir la capacidad porque hay residentes registrados.');
        } else {
            setCapacidad(tempCapacidad);
            // Actualiza las filas de la tabla
            if (tempCapacidad > rows.length) {
                const newRows = Array.from({ length: tempCapacidad - rows.length }, (_, i) => ({
                    id: rows.length + i + 1,
                    Contador: rows.length + i + 1,
                    Nombre: '',
                }));
                setRows(rows.concat(newRows));
            } else if (tempCapacidad < rows.length) {
                setRows(rows.slice(0, tempCapacidad));
            }
            setEditMode(false);
            toast.success('Se ha guardado la información de la casa.');
        }
    };


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



    return (
        <div className="parent">

            <div className="navbar">
                <Navbar />
            </div>

            <div className="content">

                <h1 className='title'>Administrar Casas</h1>

                <h1 className="title-r">Informacion sobre la Casa</h1>

                <div className="info-casa-container">

                    <CardContent className='CardContent'>
                        <div className='casa-edit'>
                            <h1 className='casa-title'>Casa #1</h1>
                            <IconButton className="icon-edit-info" icon={<EditIcon />} onClick={handleEditClick} />
                        </div>

                        <div className='casa-info-responsable'>
                            <h2 className='casa-responsable'>Residente Responsable</h2>
                            {editMode ? (
                                <TextField value={residente} onChange={(e) => setResidente(e.target.value)} />
                            ) : (
                                <p>{residente}</p>
                            )}
                        </div>

                        <div className='casa-info-capacidad'>
                            <h2 className='casa-capacity'>Capacidad de la Casa</h2>
                            {editMode ? (
                                <TextField type='number' onChange={handleCapacidadChange} value={tempCapacidad} />
                            ) : (
                                <p className='capacidad'>{capacidad} personas</p>
                            )}
                        </div>

                        {editMode && (
                            <div style={{ paddingTop: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <IconButton className="icon-save-info" text={"Guardar"} onClick={handleSave} />
                            </div>
                        )}
                    </CardContent>

                </div>


                <div className="info-casa-container-residentes">

                    <CardContent className='CardContent'>
                        <div className='casa-edit-residentes'>
                            <h1 className='casa-title'>Residentes de la Casa</h1>

                        </div>

                        <div className='casa-info-responsable-tabla'>
                            <DataGridDemo className="formato" columns={columns} rows={rows} />
                        </div>



                    </CardContent>

                </div>

                <div className="agregar-residente">
                    <CardContent className='CardContent'>
                        <div className='casa-edit-residentes'>
                            <h1 className='casa-title'>Agregar Residente</h1>
                        </div>

                        <div className='text-field-agregar'>
                            <TextField id="outlined-basic" label="Nombre del Residente" variant="outlined" onChange={handleResidenteChange} value={nuevoResidente} />
                            <IconButton className="icon-save-info" text={"Guardar"} onClick={handleGuardarResidente} />
                        </div>

                    </CardContent>
                </div>


            </div>

            <div className="menu-content">
                <Menu buttons={buttons} />
            </div>

        </div>



    )
} export default EditarInfoCasa;