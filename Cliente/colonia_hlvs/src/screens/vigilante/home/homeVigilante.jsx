import TextField from "@mui/material/TextField";
import "./homeVigilante.css";
import Box from "@mui/material/Box";
import Navbar from "../../../components/navbar/navbar";
import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import ConfirmationView from "../../../components/estados/Confirmacion/ConfirmationView";
import DeniedView from "../../../components/estados/Denegado/DeniedView";

const HomeVigilante = () => {
  const [qrCodeData, setQRCodeData] = useState("");
  const [error, setError] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(null); // Estado para manejar la confirmación

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (result) => {
        setQRCodeData(result);
        console.log("QR code scanned:", result);
        // Aquí puedes agregar lógica para verificar el resultado del QR
        if (result === "expected_result") {
          setIsConfirmed(true);
        } else {
          setIsConfirmed(false);
        }
        scanner.clear(); // Clear the scanner after a successful scan
      },
      (error) => {
        setError(error);
        console.error("QR code scan error:", error);
      }
    );

    // Cleanup on unmount
    return () => {
      scanner.clear();
    };
  }, []);

  if (isConfirmed === true) {
    return <ConfirmationView />;
  }

  if (isConfirmed === false) {
    return <DeniedView />;
  }

  return (
    <div className="containerMain">
      <Navbar />
      <div className="container">
        <div className="qr-scanner-container">
          <h2>Escanear QR</h2>
          <div id="qr-reader"></div>
          {error && (
            <div className="error">
              Error al acceder a la cámara: {error.message}
              {error.name === "NotFoundError" && (
                <p>
                  La cámara no fue encontrada o no está disponible. Asegúrate de
                  que tu dispositivo tiene una cámara funcional y que has
                  otorgado los permisos necesarios.
                </p>
              )}
              {error.name === "NotAllowedError" && (
                <p>
                  El acceso a la cámara ha sido denegado. Por favor, permite el
                  acceso a la cámara en la configuración del navegador.
                </p>
              )}
            </div>
          )}
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
