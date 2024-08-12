import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Navigate } from 'react-router-dom';

export default function AdminProtected({ children }) {

    const isAuthenticated = useSelector((state) => state.Admin.isAdmin);

    return (<div>{isAuthenticated ? <>{children}</> : <Navigate to='/signin' />}</div>);
}
