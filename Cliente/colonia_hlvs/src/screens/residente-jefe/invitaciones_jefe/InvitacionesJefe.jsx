import { useState } from 'react';
import Menu from "../../../components/menu/menu";

import residentInChargeBtn from '../../../assets/staticInfo/buttonEncargadoArray';
import InvitacionUnica from '../solicitudes/InvitacionUnica/InvitacionUnica';
import InvitacionRecurrente from '../solicitudes/InvitacionRecurrente/InvitacionRecurrente';
import Navbar from '../../../components/navbar/navbar';

import './InvitacionesJefe.css';
import { NavigateBefore } from '@mui/icons-material';


const InvitacionesJefe = () => {

    const activeInvitations = [
        { id: 1, tipo: 'unica', fecha: '2024-06-05', hora: '14:00', nombre: 'Juan Pérez' },
        { id: 2, tipo: 'recurrente', fechaInicio: '2024-06-2', fechaFin: '2024-06-25', hora: '12:00 - 3:00 pm', nombre: 'Ana Fernández', dias: ['L', 'X'] },
    ];

    const pastInvitations = [
        { id: 3, tipo: 'unica', fecha: '2024-05-20', hora: '10:00', nombre: 'Carlos Gómez' },
        { id: 4, tipo: 'recurrente', fechaInicio: '2024-06-2', fechaFin: '2024-06-25', hora: '12:00 - 3:00 pm', nombre: 'María Fernández', dias: ['L', 'J'] },
    ];

    const [filter, setFilter] = useState('active');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredInvitations = filter === 'active' ? activeInvitations : pastInvitations;

    return (
        <>
        <Navbar />
        <div className='father'>
            <div className='Left'>

                <select className="IJ-dropdown" value={filter} onChange={handleFilterChange}>
                    <option value="active">Invitaciones Activas</option>
                    <option value="past">Invitaciones Pasadas</option>
                </select>

                {filteredInvitations.map((invitacion) => {
                    if (invitacion.tipo === 'unica') {
                        return (
                            <div className="card-unica-recurrente">
                                <InvitacionUnica
                                    key={invitacion.id}
                                    fecha={invitacion.fecha}
                                    hora={invitacion.hora}
                                    nombre={invitacion.nombre}
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
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}




            </div>
            <div className='Right'>
                <Menu buttons={residentInChargeBtn} className='funca' />
            </div>
        </div>
        </>
    )
}


export default InvitacionesJefe;