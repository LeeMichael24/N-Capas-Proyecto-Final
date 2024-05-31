import Login from './screens/login_screen/login';
import Layout from './components/layout/layout';
import Missing from './components/missing/missing';
import { Routes, Route } from 'react-router-dom';
import InvitadoHome from './screens/visitante/home/invitadoHome';
import Dashboard from './screens/resident/dashboard/dashboard';
import ResidentQr from './screens/resident/resident-qr/resident-qr';
import SingleInvitation from './screens/resident/invitations/singleInvitation';
import RecurrntInvitation from './screens/resident/invitations/recurrentInvitation';
import AdminHome from './screens/admin/home/adminHome';
import AdminCasa from './screens/admin/adminCasa/adminCasa';
import AgregarEliminar from './screens/admin/adminAgregarEliminar/adminAgregarEliminar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditarInfoCasa from './screens/admin/editarInfoCasa/editarInfoCasa';

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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-qr" element={<ResidentQr />} />
          <Route path="invitacion-simple" element={<SingleInvitation />} />
          <Route path="invitacion-recurrente" element={<RecurrntInvitation />} />
          <Route path="admin" element={<AdminHome />} />
          <Route path="admincasa" element={<AdminCasa />} />
          <Route path="admincasa/agregar-eliminar" element={<AgregarEliminar />} />
          <Route path="admincasa/editarinfo" element={<EditarInfoCasa />} />☻





          {/* we want to protect these routes */}
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} />}>
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
