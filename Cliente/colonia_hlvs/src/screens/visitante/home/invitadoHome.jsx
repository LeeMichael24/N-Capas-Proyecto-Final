import "./invitadoHome.css";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/menu/menu";
import Navbar from "../../../components/navbar/navbar";
import CardDetail from "../../../components/cards/cardDetail/cardDetail";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';


function InvitadoHome() {
  const buttons = [
    { icon: <PersonIcon />, name: 'Mi Perfil', path: '/cerrar-sesion' },
    { icon: <LogoutIcon />, name: 'Cerrar sesión', path: '/login' },
  ];

    const Data = [
        { id: 1, title: '34', date: '04/20/24', time: '14:30' },
        { id: 2, title: '48', date: '05/20/24', time: '14:34' },
        { id: 3, title: '83', date: '02/20/24', time: '14:40' },
    ];

    const navigate = useNavigate();

    function handleCardClick(item) {
        navigate(`/invitacion/${item.id}`);
    }

    return (
        <>
            <Navbar />
            <div className="invitadoHome">
                <div className="left-container">
                    <h1 className="h1-visitante">Tus invitaciones</h1>
                    <div className="card-style-mt">
                        {Data.map((item) => (
                            <CardDetail 
                                key={item.id} 
                                title={item.title} 
                                date={item.date} 
                                time={item.time} 
                                onClick={() => handleCardClick(item)} 
                                isSelected={false} 
                            />
                        ))}
                    </div>
                </div>
                <div className="rigt-container">
                    <Menu buttons={buttons} />
                </div>
            </div>
        </>
    );
}

export default InvitadoHome;
