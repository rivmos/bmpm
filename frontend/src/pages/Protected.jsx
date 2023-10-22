import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Protected = ({isLoggedIn}) => {
    return(
        <div>
            {
                !isLoggedIn ? <Navigate to='/notfound' replace /> : <Outlet />
            }
        </div>
    )
  }

  export default Protected