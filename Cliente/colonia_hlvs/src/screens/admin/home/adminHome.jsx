import React from 'react'
import Menu from '../../../components/menu/menu'
import Navbar from '../../../components/navbar/navbar'
import DataGridDemo from '../../../components/table/table';
import './adminHome.css'
import BasicBars from '../../../components/chart/chart';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';
import QuantityInput from '../../../components/numberImput/numberImput';
import IconButton from '../../../components/buttons/IconButton/IconButton';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminHome() {

  const [nuevoVigilante, setNuevoVigilante] = useState('');


  const handleGuardarVigilante = () => {
    // Asegúrate de que el nombre del nuevo vigilante no esté vacío
    if (nuevoVigilante.trim() === '') {
      toast.error('El nombre del vigilante no puede estar vacío');
      //alert('El nombre del vigilante no puede estar vacío');
      return;
    }
    const nuevoVigilanteObj = { id: rowsVigilantes.length + 1, Contador: rowsVigilantes.length + 1,NombreVigilante: nuevoVigilante };
  
    setRowsVigilantes([...rowsVigilantes, nuevoVigilanteObj]);
  
    setNuevoVigilante('');

    toast.success('Vigilante agregado con éxito');

  };

  const handleDelete = (id) => {
    const newRowsVigilantes = rowsVigilantes.filter(vigilante => vigilante.id !== id);
    setRowsVigilantes(newRowsVigilantes);
    toast.success('Vigilante eliminado con éxito');
  };

  const handleVisitanteChange = (event) => {
    setNuevoVigilante(event.target.value);
};

  const columns = [
    {
      field: 'Casa',
      headerName: 'Casa',
      type: 'number',
      flex: 1,
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
    { id: 1, Casa: '#1', Nombre: 'Jose Guidos', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
    { id: 2, Casa: '#2', Nombre: 'Denys Campos', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
    { id: 3, Casa: '#10', Nombre: 'Mauri Aguilar', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
    { id: 4, Casa: '#21', Nombre: 'Nestor Aldana', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
    { id: 5, Casa: '#23', Nombre: 'Douglas Hernandez', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
    { id: 6, Casa: '#11', Nombre: 'Daniel Juarez', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
    { id: 7, Casa: '#77', Nombre: 'Lee Fuentes', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
    { id: 8, Casa: '#28', Nombre: 'Gabriela Reynosa', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
    { id: 9, Casa: '#31', Nombre: 'Alejandro Gomez', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },
    { id: 10, Casa: '#6', Nombre: 'Andrea Escobar', Fecha: new Date(), Hora: new Date().toLocaleTimeString(), },

  ];



  const columnsVigilantes = [
    {
      field: 'Contador',
      headerName: 'Vigilante',
      type: 'number',
      flex: 0,
      headerAlign: 'center',
      align: 'center',
      editable: false,
    },
    {
      field: 'NombreVigilante',
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

  const [rowsVigilantes, setRowsVigilantes] = useState([
    { id: 1, Contador: 1, NombreVigilante: "Lee Fuentes", },

  ]);


  const buttons = [
    { icon: <ShowChartIcon />, name: 'Panel de Control', path: '/admin' },
    { icon: <HolidayVillageIcon />, name: 'Administrar Casa', path: '/admin/administrar-casa' },
    { icon: <LogoutIcon />, name: 'Cerrar sesión', path: '/login' },
  ];

  const [value, setValue] = useState(30);
  const [isUpdated, setIsUpdated] = useState(false);
  const buttonClass = isUpdated ? 'button-update-enabled' : 'button-update-disabled';



  const handleUpdateClick = () => {
    console.log(`El nuevo valor es ${value}`);
    setIsUpdated(false);
    toast.success(`El intervalo de tiempo se ha actualizado a ${value} minutos`);

  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIsUpdated(true);
  };



  return (
    <div className="parent">

      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <h1 className='title'>Inicio</h1>

        <h1 className='title-r'>Registro de Ingresos</h1>
        <div className="grafico-container">
          <BasicBars />
        </div>

        <h1 className='title-r'>Historial de Ingresos</h1>

        <div className="table-container">
          <DataGridDemo columns={columns} rows={rows} />
        </div>

        <h1 className='title-r'>Intervalo de duracion de invitaciones</h1>

        <div className='duracion'>
          <QuantityInput value={value} onChange={handleChange} />
          <IconButton className={buttonClass} icon='' text='Actualizar' onClick={handleUpdateClick} disabled={!isUpdated} />
        </div>

        <div>
          <h1 className='title-r'> Vigilantes</h1>

          <div className='table-container'>
            <DataGridDemo rows={rowsVigilantes} columns={columnsVigilantes} pageSize={5} />
          </div>

          <div className="agregar-residente">
            <CardContent className='CardContent'>
              <div className='casa-edit-residentes'>
                <h1 className='casa-title'>Agregar Vigilante</h1>
              </div>

              <div className='text-field-agregar'>
              <TextField id="outlined-basic" label="Nombre del Vigilante" variant="outlined" onChange={handleVisitanteChange} value={nuevoVigilante} />
              <IconButton className="icon-save-info" text={"Guardar"} onClick={handleGuardarVigilante} />
              </div>

            </CardContent>
          </div>




        </div>

      </div>

      <div className="menu-content">
        <Menu buttons={buttons} />
      </div>
    </div>
  )
}
export default AdminHome