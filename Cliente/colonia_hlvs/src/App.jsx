import Login from './screens/login_screen/login';
import Layout from './components/layout/layout';
import Missing from './components/missing/missing';
import { Routes, Route } from 'react-router-dom';
import InvitadoHome from './screens/visitante/home/invitadoHome';
import InvitacionA from './screens/visitante/Invitacion/invitacionA';
import Dashboard from './screens/resident/dashboard/dashboard';
import ResidentQr from './screens/resident/resident-qr/resident-qr';
import SingleInvitation from './screens/resident/invitations/singleInvitation';
import RecurrntInvitation from './screens/resident/invitations/recurrentInvitation';
import GestionHogar from './screens/residente-jefe/gestion_hogar/gestion_hogar';
import AgregarMiembro from './screens/residente-jefe/agregar_miembro/Agregar_Miembro';
import AdminHome from './screens/admin/home/adminHome';
import AdminCasa from './screens/admin/adminCasa/adminCasa';
import AgregarEliminar from './screens/admin/adminAgregarEliminar/adminAgregarEliminar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditarInfoCasa from './screens/admin/editarInfoCasa/editarInfoCasa';
import ProfileVisitante from './screens/visitante/profile/profileVisitante';
import HomeVigilante from './screens/vigilante/home/homeVigilante';
import Profile from './screens/resident/profile/profile';
import Registro_Entradas from './screens/residente-jefe/lista_entradas/Registro_Entradas';
import SolicitudVisitas from './screens/residente-jefe/solicitudes/SolicitudVisitas';
import InvitacionesJefe from './screens/residente-jefe/invitaciones_jefe/InvitacionesJefe';

/* const ROLES = {
  SYSADMIN: ['tlahtoani'],
  ADMIN: ['temachtiani'],
  USER: ['temachtilli']
}; */



function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} /> {/* por el momento de prueba queda si */}

          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="invitadoHome" element={<InvitadoHome />} />
          <Route path='/invitacion/:id' element={<InvitacionA />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-qr" element={<ResidentQr />} />
          <Route path="invitacion-simple" element={<SingleInvitation />} />
          <Route path="invitacion-recurrente" element={<RecurrntInvitation />} />
          <Route path="gestion-hogar" element={<GestionHogar />}/>
          <Route path="agregar-miembro" element={<AgregarMiembro />}/>
          <Route path="entradas" element={<Registro_Entradas />}/>
          <Route path="solicitudes" element={<SolicitudVisitas />}/>
          <Route path="lista-invitaciones" element={<InvitacionesJefe />}/>
          <Route path="admin" element={<AdminHome />} />
          <Route path="admincasa" element={<AdminCasa />} />
          <Route path="admincasa/agregar-eliminar" element={<AgregarEliminar />} />
          <Route path="admincasa/editarinfo" element={<EditarInfoCasa />} />☻
          <Route path="profileVisitante" element={<ProfileVisitante/>} />
          <Route path="myprofile" element={<Profile/>} />

          {/* vigilante */}
          <Route path="vigilanteHome" element={<HomeVigilante/>} />




         {/* we want to protect these routes */}
         {/* <Route element={<RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} /
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.SYSADMIN]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route> */}

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );

}

export default App;
