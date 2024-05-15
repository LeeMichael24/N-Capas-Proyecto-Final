import React from 'react';
import QRCodeScanner from 'react-qrcode-scanner';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components for responsive layout

const HomeVigilante = () => {
  const [qrCodeData, setQRCodeData] = React.useState(''); // Estado para los datos del código QR

  const handleScan = (data) => {
    setQRCodeData(data);
    console.log('QR code scanned:', data); // Simulando el envío de datos a la API
  };

  return (
    <Container className="login-container">
      <Row>
        <Col md={6} className="qr-scanner-container">
          <h2>Inicia sesión con QR</h2>
          <QRCodeScanner onScan={handleScan} />
          {qrCodeData && (
            <div className="qr-code-data">Código escaneado: {qrCodeData}</div>
          )}
        </Col>
        <Col md={6} className="login-form-container">
          <h2>Inicia sesión con formulario</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Nombre de usuario:</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Ingrese su nombre de usuario"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeVigilante;
