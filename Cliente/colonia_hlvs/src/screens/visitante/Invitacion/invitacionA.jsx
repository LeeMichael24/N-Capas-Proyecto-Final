import Navbar from "../../../components/navbar/navbar";
import CardDetail from "../../../components/cards/cardDetail/cardDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "../../../components/menu/menu";
import "./InvitacionA.css";
import testPic from "../../../assets/react.svg"

const buttons = [
  { icon: `${testPic}`, name: "Mi perfil", path: "/mi-perfil" },
  { icon: `${testPic}`, name: "Cerrar sesión", path: "/login" },
  { icon: `${testPic}`, name: "Cerrar sesión", path: "/cerrar-sesion" },
  { icon: `${testPic}`, name: "Cerrar sesión", path: "/cerrar-sesion" },
  { icon: `${testPic}`, name: "Cerrar sesión", path: "/cerrar-sesion" },
];

const data = [
  { id: 1, title: "34", date: "04/20/24", time: "14:30" },
  { id: 2, title: "48", date: "05/20/24", time: "14:34" },
  { id: 3, title: "83", date: "02/20/24", time: "14:40" },
];

function InvitacionA() {
  const { id } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const card = data.find((item) => item.id === parseInt(id));
    setSelectedCard(card);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="invitadoHome">
        <div className="left-container">
          <h1 className="h1-visitante">Invitación a:</h1>
          <div className="card-style-mt">
            {selectedCard && (
              <>
                <CardDetail
                  key={selectedCard.id}
                  title={selectedCard.title}
                  date={selectedCard.date}
                  time={selectedCard.time}
                  isSelected={true}
                />
                <button className="extra-button">Generar Código QR</button>
              </>
            )}
          </div>
        </div>
        <div className="rigt-container">
          <Menu buttons={buttons} />
        </div>
      </div>
    </>
  );
}

export default InvitacionA;
