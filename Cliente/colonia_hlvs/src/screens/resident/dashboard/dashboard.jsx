import "./dashboard.css";
import ButtonMenu from "../../../components/menu/menuButtom/menuButtom";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/menu/menu";
import InsertInvitationRoundedIcon from "@mui/icons-material/InsertInvitationRounded";
import EventRepeatRoundedIcon from "@mui/icons-material/EventRepeatRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function dashboard() {
  const buttonsVisit = [
    {
      icon: <InsertInvitationRoundedIcon />,
      name: "Invitacion Simple",
      path: "/invitacion-simple",
    },
    {
      icon: <EventRepeatRoundedIcon />,
      name: "Invitacion Recurrente",
      path: "/invitacion-recurrente",
    },
    { icon: <PersonRoundedIcon />, name: "Mi perfil", path: "/admin" },
    { icon: <LogoutRoundedIcon />, name: "Cerrar Sesion", path: "/" },
  ];

  const navigate = useNavigate("");
  const handleSubmit = () => {
    navigate("/my-qr");
  };

  return (
    <div className="father" id="testDAD">
      <div className="Left">
        <h2> Bienvenido</h2>
        <button className="QR_Button" onClick={handleSubmit}>
          <QrCode2RoundedIcon className="icon" />
          <span>Generar QR</span>
        </button>
        <h4> Presione el boton para generar el codigo-QR</h4>
      </div>
      <div id="stay">
        <Menu buttons={buttonsVisit} className="funca" />
      </div>
    </div>
  );
}

export default dashboard;
