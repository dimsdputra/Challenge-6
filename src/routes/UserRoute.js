import {Fragment} from 'react';
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import Home from '../pages/Home';

const HandleLogin = () => {
  if (localStorage.getItem("access_token")) {
      return <Navigate to="/" replace />
  }
  return <Outlet />;
}
function UserRoute() {

  return (
    <Fragment>
        
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
            <Route element={<HandleLogin/>}>
              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
            </Route>
        </Routes>
  
      </Fragment>
  )
}

export default UserRoute