import Navbar from "../../../components/navbar/navbar";
import CardDetail from "../../../components/cards/cardDetail/cardDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "../../../components/menu/menu";
import "./InvitacionA.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useNavigate } from "react-router-dom";
import IconButton from '../../../components/buttons/IconButton/IconButton';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';

const buttons = [
  { icon: <InsertInvitationRoundedIcon />, name: "Invitaciones", path: "/InvitadoHome",},
  { icon: <PersonRoundedIcon />, name: "Mi perfil", path: "/InvitadoHome/profileVisitante" },
  { icon: <LogoutRoundedIcon/>, name: "Cerrar sesión", path: "/login" },
];

const data = [
    { id: 1, title: '34', date: '04/20/24', time: '14:30' },
    { id: 2, title: '48', date: '05/20/24', time: '14:34' },
    { id: 3, title: '83', date: '02/20/24', time: '14:40' },
];

function InvitacionA() {
  const { id } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const card = data.find((item) => item.id === parseInt(id));
    setSelectedCard(card);
  }, [id]);

  function handlerQR() {
    navigate(`/invitadoHome/invitacion/${id}/mi-qr`);
  }

  return (
    <div className="padreVisitante">
      <Navbar />
      <div className="invitacionA-home">
        <div className="invitacionA-left-container">
          <h1 className="invitacionA-h1-visitante">Invitación a:</h1>
          <div className="invitacionA-card-style-mt">
            {selectedCard && (
              <>
                <CardDetail
                  key={selectedCard.id}
                  title={selectedCard.title}
                  date={selectedCard.date}
                  time={selectedCard.time}
                  isSelected={true}
                />
                
                <div className="invitacionA-button-container">
                  <IconButton icon={<QrCode2RoundedIcon />} text="Generar QR" onClick={handlerQR} />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="invitacionA-right-container">
          <Menu buttons={buttons} />
        </div>
      </div>
    </div>
  );
}

export default InvitacionA;
