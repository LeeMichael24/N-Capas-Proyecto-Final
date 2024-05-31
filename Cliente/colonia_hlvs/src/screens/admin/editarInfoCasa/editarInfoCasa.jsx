import React from 'react';
import Menu from '../../../components/menu/menu';
import Navbar from '../../../components/navbar/navbar';
import './editarInfoCasa.css';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '../../../components/buttons/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import { useState } from 'react';

import DataGridDemo from '../../../components/table/table';



function EditarInfoCasa() {

    const [editMode, setEditMode] = useState(false);
    const [residente, setResidente] = useState('Mauricio Aguilar');
    const [capacidad, setCapacidad] = useState('3 personas');
    const [residentes, setResidentes] = useState([
        // Tus datos iniciales de los residentes van aquí
    ]);


    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
    };


    const buttons = [
        { icon: <ShowChartIcon />, name: 'Panel de Control', path: '/admin' },
        { icon: <HolidayVillageIcon />, name: 'Administrar Casa', path: '/admincasa' },
        { icon: <PersonIcon />, name: 'Mi Perfil', path: '/cerrar-sesion' },
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

    ];

    const rows = [
        { id: 1, Contador: 1, Nombre: "Mauricio Aguilar", },
        { id: 2, Contador: 2, Nombre: "Daniel Quintanilla", },
        { id: 3, Contador: 3, Nombre: "Carlos Suria", },
    ];




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
                            <h2 className='casa-capacity'>Residente Responsable</h2>
                            {editMode ? (
                                <TextField value={residente} onChange={(e) => setResidente(e.target.value)} />
                            ) : (
                                <p>{residente}</p>
                            )}
                        </div>

                        <div className='casa-info-capacidad'>
                            <h2 className='casa-capacity'>Capacidad</h2>
                            {editMode ? (
                                <TextField type='number' value={capacidad} onChange={(e) => setCapacidad(e.target.value)} />
                            ) : (
                                <p>{capacidad}</p>
                            )}
                        </div>

                        {editMode && (
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <IconButton className="icon-save-info" text={"Guardar"} onClick={handleSaveClick} />
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


            </div>

            <div className="menu-content">
                <Menu buttons={buttons} />
            </div>

        </div>



    )
} export default EditarInfoCasa;