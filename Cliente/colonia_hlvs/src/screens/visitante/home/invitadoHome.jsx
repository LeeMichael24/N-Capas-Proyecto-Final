import { useNavigate } from "react-router-dom";
import Menu from "../../../components/menu/menu";
import Navbar from "../../../components/navbar/navbar";
import CardDetail from "../../../components/cards/cardDetail/cardDetail";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./invitadoHome.css";


function InvitadoHome() {
    const buttons = [
        { icon: <PersonRoundedIcon/>, name: 'Mi perfil', path: '/profileVisitante' },
        { icon: <LogoutRoundedIcon/>, name: 'Cerrar sesión', path: '/login' },
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
                <div className="right-container">
                    <Menu buttons={buttons} />
                </div>
            </div>
        </>
    );
}

export default InvitadoHome;
