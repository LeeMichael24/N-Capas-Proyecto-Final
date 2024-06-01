import TextField from "@mui/material/TextField";
import "./homeVigilante.css";
import Box from "@mui/material/Box";
import Navbar from "../../../components/navbar/navbar";
import { Html5QrcodeScanner } from "html5-qrcode";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useEffect, useState } from "react";

const HomeVigilante = () => {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const success = (result) => {
    setScanResult(result);
    setIsScanning(false);
  }

  const error = (err) => {
    console.warn(err);
  }

  useEffect(() => {
    if (isScanning) {
      const scanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          width: 150,
          height: 150,
        },
        fps: 5,
      });

      scanner.render(success, error);

      return () => {
        scanner.clear();
      }

    }
  }, [isScanning]);

  const handleScanClick = () => {
    setIsScanning(true);
  };

  return (
    <div className="containerMain">
      <Navbar />
      <div className="container-vigi">
        <div className="qr-scanner-container">
          <h2 className="h2-qr">Escanear QR</h2>
          <div id="reader" className="qr-container-reader">
            {scanResult ? (
              <div>
                Success: <a href={"http://" + scanResult}>{scanResult}</a>
              </div>
            ) : (
              !isScanning && (
                <div className="qr-icon-container" onClick={handleScanClick}>
                  <QrCodeScannerIcon className="qr-vigilante" />
                </div>
              )
            )}
          </div>
        </div>
        <div className="login-form-container">
          <h2 className="h2-form">Ingresar entrada anónima</h2>
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

          <button className="btn-vigilate">Registrar</button>
        </div>
      </div>
    </div>
  );
};

export default HomeVigilante;
