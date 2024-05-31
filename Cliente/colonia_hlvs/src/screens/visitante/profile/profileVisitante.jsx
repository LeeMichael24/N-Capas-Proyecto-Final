import "./profileVisitante.css";
import Navbar from "../../../components/navbar/navbar";
import Menu from "../../../components/menu/menu";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const buttons = [
  { icon: <PersonRoundedIcon />, name: "Mi perfil", path: "profileVisitante" },
  { icon: <LogoutRoundedIcon />, name: "Cerrar sesión", path: "/login" },
];

function ProfileVisitante() {
  return (
    <>
      <Navbar />
      <div className="invitadoHome">
        <div className="left-container">
          <h1 className="h1-visitante">Mi perfil</h1>
          <div className="card-style-mt">
            <div>
              Por seguridad solicitamos tu DUI, no te preocupes, esta
              información es confidencial
            </div>
            <div>
              <div>
                <Box className="form-container" noValidate autoComplete="off">
                  <div className="textFlied">
                    <TextField
                      id="outlined-dui-input"
                      label="DUI"
                      type="dui"
                      autoComplete="current-dui"
                    />
                  </div>
                </Box>
              </div>
              <div>Soy Menor de edad</div>
            </div>
          </div>
        </div>
        <div className="rigt-container">
          <Menu buttons={buttons} />
        </div>
      </div>
    </>
  );
}

export default ProfileVisitante;
