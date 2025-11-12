import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthContext"


const ProtectedRoutes = ({children}) => {
    const {user} = useAuthContext();

    if(!user){
        return <Navigate to="/admin" replace />
    }
    return children;
  
};

export default ProtectedRoutes;