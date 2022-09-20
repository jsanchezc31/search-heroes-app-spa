import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"


export const PrivateRouter = ({ children }) => {

  const { logged } = useContext(AuthContext);

  const location = useLocation();

  const { pathname, search } = location;

  const lastPath = pathname + search;
  localStorage.setItem('lastpath', lastPath);



  return (logged)
    ? children
    : <Navigate to="/login" />
}
