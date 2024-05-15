import "./DeniedView.css";
import { Container, Row, Col, Alert } from 'react-bootstrap'; // Importar componentes Bootstrap

const DeniedView = () => {
  return (
    <Container className="login-access-denied-container">
      <Row>
        <Col md={12} className="text-center">
          <Alert variant="danger">
            <h1 className="access-denied-title">Acceso Denegado</h1>
            <svg
              className="access-denied-icon"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20,50 L80,50"
                stroke="#dc3545"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M50,20 L50,80"
                stroke="#dc3545"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default DeniedView;
