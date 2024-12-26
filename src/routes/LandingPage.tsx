import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import NavBar from "../components/NavBar";

const LandingPage = () => {

  const UserData = useAuth();

  if (UserData?.UserToken) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div className="h-dvh bg-green-600">
      <NavBar />
      <div className='bg-blue-600 text-xl'>
        This is the landing page
      </div>
    </div>
  )
}

export default LandingPage
