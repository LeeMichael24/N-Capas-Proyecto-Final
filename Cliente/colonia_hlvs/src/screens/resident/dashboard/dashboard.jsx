import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import Menu from '../../../components/menu/menu';

//mui
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Navbar from '../../../components/navbar/navbar';

import residentButtons from '../../../assets/staticInfo/buttonsArray'

function dashboard() {

  const navigate = useNavigate("");
  const handleSubmit = () => {
    navigate("mi-qr");
  };

  return (
    <>
      <Navbar />
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
          <Menu buttons={residentButtons} className="funca" />
        </div>
      </div>
    </>
  );
}

export default dashboard;
