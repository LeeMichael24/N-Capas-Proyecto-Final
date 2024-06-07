import { useState } from "react";
import Menu from "../../../components/menu/menu";
import './SolicitudesVisitas.css';

import residentInChargeBtn from '../../../assets/staticInfo/buttonEncargadoArray';
import InvitacionUnica from "./InvitacionUnica/InvitacionUnica";
import InvitacionRecurrente from "./InvitacionRecurrente/InvitacionRecurrente";
import SolicitudButton from "./AuxButtons/SolicitudButton";
import Navbar from "../../../components/navbar/navbar";
import { Fab, useMediaQuery } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';


const initialInvitaciones = [
    {
        id: 1,
        tipo: 'unica',
        fecha: '6/2/2024',
        hora: '12:30 pm',
        nombre: 'Pedro Paramo'
    },
    {
        id: 2,
        tipo: 'recurrente',
        fechaInicio: '6/2/2024',
        fechaFin: '6/25/2024',
        hora: '12:30 - 3:00 pm',
        nombre: 'Pedro Paramo',
        dias: ['L', 'M']
    },
    {
        id: 3,
        tipo: 'unica',
        fecha: '6/2/2024',
        hora: '12:30 pm',
        nombre: 'Pedro Paramo'
    },
    {
        id: 4,
        tipo: 'recurrente',
        fechaInicio: '6/2/2024',
        fechaFin: '6/25/2024',
        hora: '12:30 - 3:00 pm',
        nombre: 'Pedro Paramo',
        dias: ['L', 'M']
    },
];


const SolicitudVisitas = () => {
    const [invitaciones, setInvitaciones] = useState(initialInvitaciones);

    const handleAceptar = (id) => {
        setInvitaciones(invitaciones.filter(invitacion => invitacion.id !== id));
    };

    const handleRechazar = (id) => {
        setInvitaciones(invitaciones.filter(invitacion => invitacion.id !== id));
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

    return (
        <>
            <Navbar />
            {matches && (
                <Fab size='medium' color='primary' className='fab' aria-label='Ir al menu' sx={fabStyle} onClick={handleClick}>
                    <WidgetsIcon/>
                </Fab>
            )}
            <div className='father'>
                <div className='Left' id='scroller'>
                    <h2 className="scroll_padd">Solicitudes de visita</h2>

                    {invitaciones.map((invitacion) => {
                        if (invitacion.tipo === 'unica') {
                            return (
                                <div className="card-unica-recurrente">
                                    <InvitacionUnica
                                        key={invitacion.id}
                                        fecha={invitacion.fecha}
                                        hora={invitacion.hora}
                                        nombre={invitacion.nombre}
                                    />
                                    <SolicitudButton
                                        onAceptar={() => handleAceptar(invitacion.id)}
                                        onRechazar={() => handleRechazar(invitacion.id)}
                                    />
                                </div>
                            );
                        } else if (invitacion.tipo === 'recurrente') {
                            return (
                                <div className="card-unica-recurrente">
                                    <InvitacionRecurrente
                                        key={invitacion.id}
                                        fechaInicio={invitacion.fechaInicio}
                                        fechaFin={invitacion.fechaFin}
                                        hora={invitacion.hora}
                                        nombre={invitacion.nombre}
                                        dias={invitacion.dias}
                                    />
                                    <SolicitudButton
                                        onAceptar={() => handleAceptar(invitacion.id)}
                                        onRechazar={() => handleRechazar(invitacion.id)}
                                    />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}

                </div>
                <div className='Right' id='hastaAbajoBaby'>
                    <Menu buttons={residentInChargeBtn} className='funca' />
                </div>
            </div>
        </>
    )
}


export default SolicitudVisitas;