import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children;
    }
    return <Navigate to="/login"/>
};

export default PrivateRouter;