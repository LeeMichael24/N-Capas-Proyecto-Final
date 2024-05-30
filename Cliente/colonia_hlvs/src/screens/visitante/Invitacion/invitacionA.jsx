import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/navbar';
import CardDetail from '../../../components/cards/cardDetail/cardDetail';
import Menu from '../../../components/menu/menu';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import QrCodeIcon from '@mui/icons-material/QrCode'; // Importar el icono de código QR de @mui/icons-material
import './InvitacionA.css';

const buttons = [
    { icon: <PersonIcon />, name: 'Mi Perfil', path: '/cerrar-sesion' },
    { icon: <LogoutIcon />, name: 'Cerrar sesión', path: '/login' },
];

const data = [
    { id: 1, title: '34', date: '04/20/24', time: '14:30' },
    { id: 2, title: '48', date: '05/20/24', time: '14:34' },
    { id: 3, title: '83', date: '02/20/24', time: '14:40' },
];

function InvitacionA() {
    const { id } = useParams();
    const [selectedCard, setSelectedCard] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const card = data.find((item) => item.id === parseInt(id));
        setSelectedCard(card);
    }, [id]);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Navbar />
            <div className="invitadoHome">
                <div className="left-container">
                    <h1 className="h1-visitante">Invitación a:</h1>
                    <div className="card-style-mt">
                        {selectedCard && (
                            <>
                                <CardDetail
                                    key={selectedCard.id}
                                    title={selectedCard.title}
                                    date={selectedCard.date}
                                    time={selectedCard.time}
                                    isSelected={true}
                                />
                                <button className="extra-button" onClick={openModal}>Generar Código QR</button>
                            </>
                        )}
                    </div>
                </div>
                <div className="right-container">
                    <Menu buttons={buttons} />
                </div>
            </div>
            <Dialog open={modalOpen} onClose={closeModal}>
                <DialogTitle>Generar Código QR</DialogTitle>
                <DialogContent>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <QrCodeIcon style={{ fontSize: 100 }} /> {/* Utilizar el icono de código QR */}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default InvitacionA;
