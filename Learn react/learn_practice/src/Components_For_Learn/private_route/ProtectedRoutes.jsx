import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoutes({user}) {
    /*
        The <Outlet> component is a placeholder within a parent route's
            component that tells React Router where to render the child routes
    */
    return user ? <Outlet></Outlet> : <>
        <Navigate to="/login"></Navigate>
    </>;
}
