import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div>
            <progress className="progress w-56" value="0" max="100"></progress>
            <progress className="progress w-56" value="10" max="100"></progress>
            <progress className="progress w-56" value="40" max="100"></progress>
            <progress className="progress w-56" value="70" max="100"></progress>
            <progress className="progress w-56" value="100" max="100"></progress>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;