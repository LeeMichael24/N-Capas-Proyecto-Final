import Login from './screens/login_screen/login';
import Layout from './components/layout/layout';
import Missing from './components/missing/missing';
import { Routes, Route } from 'react-router-dom';
import InvitadoHome from './screens/visitante/home/invitadoHome';
import AdminHome from './screens/admin/home/adminHome';

/* const ROLES = {
  SYSADMIN: ['tlahtoani'],
  ADMIN: ['temachtiani'],
  USER: ['temachtilli']
}; */



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Login />} /> {/* por el momento de prueba queda si */}
      
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="invitadoHome" element={<InvitadoHome />} />
        <Route path="admin" element={<AdminHome/>} />



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
  );
}

export default App;
