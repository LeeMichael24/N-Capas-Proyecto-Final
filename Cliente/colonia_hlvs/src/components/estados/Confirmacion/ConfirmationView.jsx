import "./ConfirmationView.css";
import { Container, Row, Col, Alert } from 'react-bootstrap'; // Import Bootstrap components

const ConfirmationView = () => {
  return (
    <Container className="login-confirmation-container">
      <Row>
        <Col md={12} className="text-center">
          <Alert variant="success">
            <h1 className="confirmation-title">Acceso Permitido</h1>
            <svg
              className="confirmation-icon"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50,50 L70,70 L30,30 L50,50 Z"
                fill="#007bff"
                stroke="#007bff"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="40" fill="#007bff" />
            </svg>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmationView;
