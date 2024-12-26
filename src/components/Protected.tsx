import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

const Protected = ({ children }: { children: React.ReactNode }) => {

    const UserData = useAuth();

    if (!UserData?.UserToken) {
        return <Navigate to='/login' />
    }

    return (
        children
    )
}

export default Protected
