import Navbar from "../../../components/navbar/navbar";
import Menu from "../../../components/menu/menu";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { blue } from "@mui/material/colors";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import "./profileVisitante.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';



function ProfileVisitante() {
  const buttons = [
    { icon: <PersonRoundedIcon />, name: "Perfil", path: "/invitadoHome/profileVisitante",},
    { icon: <InsertInvitationRoundedIcon />, name: "Invitaciones", path: "/InvitadoHome",},
    { icon: <LogoutRoundedIcon />, name: "Cerrar sesión", path: "/login" },
  ];
  
  const [dui, setDui] = useState("");
  
  const handleDuiChange = (event) => {
    const value = event.target.value;
    const regex = /^[0-9]{0,8}-?[0-9]{0,1}$/; // Allow up to 8 digits, an optional hyphen, and 1 digit after the hyphen
    if (regex.test(value)) {
      setDui(value);
    }
  };
  
  const handleRegisterClick = () => {
    // Aquí puedes agregar la lógica de registro.
    // Mostrar el mensaje de toast
    toast.success("Registro exitoso!");
  };

  
  const label = { inputProps: { "aria-label": "Soy Menor de edad" } };

  return (
    <div className="padreProfile">
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
              <Box
                className="profileVisitante-form-container"
                noValidate
                autoComplete="off"
              >
                <div className="profileVisitante-text-field">
                  <TextField
                    id="outlined-dui-input"
                    label="DUI"
                    type="dui"
                    autoComplete="current-dui"
                    className="profileVisitante-text-field"
                    value={dui}
                    onChange={handleDuiChange}
                    inputProps={{
                      pattern: "^[0-9]{8}-[0-9]$", // Regex for DUI format: 8 digits, a hyphen, and 1 digit
                      maxLength: 10, // 8 digits + 1 hyphen + 1 digit = 10 characters
                    }}
                  />
                </div>
              </Box>
              <div>
                <Checkbox
                  {...label}
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
              <button className="profileVisitante-button-save" onClick={handleRegisterClick}>
                Guardar información
              </button>
            </div>
          </div>
        </div>
        <div className="profileVisitante-right-container">
          <Menu buttons={buttons} />
        </div>
      </div>
    </div>
  );
}

export default ProfileVisitante;
