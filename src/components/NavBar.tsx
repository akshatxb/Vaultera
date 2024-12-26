import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate();

    const HandleLoginClick = () => {
        navigate('/login')
    }

    return (
        <div className='flex justify-center items-center gap-10'>
            <ul className='flex justify-center items-center gap-5'>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <button className='bg-red-600 w-20' onClick={HandleLoginClick}>LOGIN</button>
        </div>
    )
}

export default NavBar
