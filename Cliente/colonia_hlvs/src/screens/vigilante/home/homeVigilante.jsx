
import TextField from "@mui/material/TextField";
import "./homeVigilante.css";
import Box from '@mui/material/Box';
import Navbar from "../../../components/navbar/navbar";


const HomeVigilante = () => {



  return (
    <div className="containerMain">
      <Navbar />
      <div className="container">
        <div className="qr-scanner-container">
          <h2>Escanear QR</h2>
          {/* aca tiene que abrir la camara y escanear el qr */}
        </div>
        <div className="login-form-container">
          <h2>Ingresar entrada anónima</h2>
          <Box className="form-container" noValidate autoComplete="off">
            <div className="textFlied">
              <TextField
                id="outlined-name-input"
                label="Nombre"
                type="name"
                autoComplete="current-name"
              />
            </div>
            <div className="textFlied">
              <TextField
                id="outlined-dui-input"
                label="DUI"
                type="dui"
                autoComplete="current-dui"
              />
            </div>
            <div className="textFlied">
              <TextField
                id="outlined-comentario-input"
                label="Comentario"
                type="comentario"
                autoComplete="current-comentario"
              />
            </div>
          </Box>

          <button> Registrar </button>
        </div>
    </div>
    </div>
  );
};

export default HomeVigilante;
