import "./invitadoHome.css"
import Menu from "../../../components/menu/menu"
import testPic from "../../../assets/react.svg"
import Card from "../../../components/cards/card";
import Navbar from "../../../components/navbar/navbar";

function InvitadoHome() {
    //aca debemos de crear las las rutas para nuestros botones, iconos, etc.
    const buttons = [
      { icon: `${testPic}`, name: 'Mi perfil', path: '/mi-perfil' },
      { icon: `${testPic}`, name: 'Cerrar sesión', path: '/login' },
      { icon: `${testPic}`, name: 'Cerrar sesión', path: '/cerrar-sesion' },
      { icon: `${testPic}`, name: 'Cerrar sesión', path: '/cerrar-sesion' },
      { icon: `${testPic}`, name: 'Cerrar sesión', path: '/cerrar-sesion' },
    ];
  return (
    <>
      <Navbar />
      <div className="invitadoHome">
        <div className="left-container">
          <h1 className="h1-visitante">Tus invitaciones</h1>
          <div className="card-style-mt">
            <Card />
          </div>
        </div>
        <div className="rigt-container">
          <Menu buttons={buttons} />
        </div>
      </div>
    </>
  )
}

export default InvitadoHome;