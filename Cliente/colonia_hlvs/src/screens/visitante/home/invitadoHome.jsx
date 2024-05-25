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
      ];
  return (
    <div className="invitadoHome">
      <div className="content">
        <div className="main-content">
          {/* Aquí va el contenido principal de la página */}
        </div>
        <Menu buttons={buttons} />
      </div>
    </div>
  )
}

export default InvitadoHome;