import { useState } from "react"
import PasswordsCard from "../../components/PasswordsCard"
import NavMenu from "./NavMenu"

const Home = () => {

    const [PasswordCount, SetPasswordCount] = useState(390);

    return (

        <div className='h-full'>
            <PasswordsCard Count={PasswordCount} />
        </div>
    )
}

export default Home
