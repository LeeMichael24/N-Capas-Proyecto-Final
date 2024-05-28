import React from 'react'
import Menu from '../../../components/menu/menu'
import Navbar from '../../../components/navbar/navbar'
import DataGridDemo from '../../../components/table/table';


function AdminHome() {

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
    { id: 1, Casa: '#1', Nombre: 'Jose Guidos', Fecha: new Date(), Hora: new Date().toLocaleTimeString(),},
    { id: 2, Casa: '#2', Nombre: 'Denys Campos', Fecha: new Date(), Hora: new Date().toLocaleTimeString(),},
    { id: 3, Casa: '#10', Nombre: 'Mauri Aguilar', Fecha: new Date(), Hora: new Date().toLocaleTimeString(),},
    { id: 4, Casa: '#21', Nombre: 'Nestor Aldana', Fecha: new Date(), Hora: new Date().toLocaleTimeString(),},
    { id: 5, Casa: '#23', Nombre: 'Douglas Hernandez', Fecha: new Date(), Hora: new Date().toLocaleTimeString(),},
    { id: 6, Casa: '#11', Nombre: 'Daniel Juarez', Fecha: new Date(), Hora: new Date().toLocaleTimeString(),},
    { id: 7, Casa: '#77', Nombre: 'Lee Fuentes', Fecha: new Date(), Hora: new Date().toLocaleTimeString(),},
    { id: 8, Casa: '#28', Nombre: 'Gabriela Reynosa', Fecha: new Date(), Hora: new Date().toLocaleTimeString(),},
    { id: 9, Casa: '#31', Nombre: 'Alejandro Gomez', Fecha: new Date(), Hora: new Date().toLocaleTimeString(),},
    { id: 10, Casa: '#9', Nombre: 'Andrea Escobar', Fecha: new Date(), Hora: new Date().toLocaleTimeString(),},

];


  const buttons = [
    { icon: name, name: 'Mi perfil',path:'/assets/react.svg'},
    { icon: name, name: 'Mi perfil',path:'/assets/react.svg'},
    { icon: name, name: 'Mi perfil',path:'/assets/react.svg'},
    { icon: name, name: 'Mi perfil',path:'/assets/react.svg'},

  ];

  return (
    <div className="adminHome">
       <Navbar />

      <div className="content">
        <div className="main-content">  
          <DataGridDemo columns={columns} rows={rows} />
        </div>
        <Menu buttons={buttons} />
      </div>
    </div>
  )
}
export default AdminHome