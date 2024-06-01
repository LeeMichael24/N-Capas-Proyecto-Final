import Navbar from "../../../components/navbar/navbar";
import Menu from "../../../components/menu/menu";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { blue } from "@mui/material/colors";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import QrCodeIcon from '@mui/icons-material/QrCode';
import "./profileVisitante.css";
import { useLocation ,useNavigate } from "react-router-dom";

const buttons = [
  { icon: <PersonRoundedIcon />, name: "Mi perfil", path: "/profileVisitante" },
  { icon: <LogoutRoundedIcon />, name: "Cerrar sesión", path: "/login" },
];

function ProfileVisitante() {
  const label = { inputProps: { "aria-label": "Soy Menor de edad" } };

  return (
    <>
      <Navbar />
      <div className="profileVisitante-home">
        <div className="profileVisitante-left-container">
          <h1 className="profileVisitante-h1-visitante">Mi perfil</h1>
          <div className="profileVisitante-card-style-mt">
            <div className="profileVisitante-hint profileVisitante-box-container">
              <ErrorOutlineRoundedIcon className="profileVisitante-icon" />
              Por seguridad solicitamos tu DUI, no te preocupes, esta
              información es confidencial
            </div>
            <div className="profileVisitante-box-container">
              <Box className="profileVisitante-form-container" noValidate autoComplete="off">
                <div className="profileVisitante-text-field">
                  <TextField
                    id="outlined-dui-input"
                    label="DUI"
                    type="dui"
                    autoComplete="current-dui"
                    className="profileVisitante-text-field"
                  />
                </div>
              </Box>
              <div>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: blue[800],
                    "&.Mui-checked": {
                      color: blue[600],
                    },
                  }}
                />{" "}
                Soy menor de edad
              </div>
            </div>
            <div className="profileVisitante-button-container">
              <button className="profileVisitante-button-save">
                <QrCodeIcon/>
                Guardar información
              </button>
            </div>
          </div>
        </div>
        <div className="profileVisitante-right-container">
          <Menu buttons={buttons} />
        </div>
      </div>
    </>
  );
}

export default ProfileVisitante;
