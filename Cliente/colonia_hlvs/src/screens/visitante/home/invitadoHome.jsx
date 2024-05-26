import "./invitadoHome.css"
import Menu from "../../../components/menu/menu"
import testPic from "../../../assets/react.svg"

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
    <div className="invitadoHome">
      <div className="left-container">
        
      </div>
      <div className="rigt-container">
        <Menu buttons={buttons} />
      </div>
    </div>
  )
}

export default InvitadoHome;