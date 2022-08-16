import { useAppSelector } from '../../hooks/redux.hooks';
import { Navigate, useLocation } from "react-router-dom";

export const NotAuthRoute = ({ children }: { children: JSX.Element }) => {
    // location
    const location = useLocation();

    // get auth info
    const { isAuthenticated, loading } = useAppSelector( state => state.user );

    if (!loading && isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace/>;
    }

    return children;
};

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    // location
    const location = useLocation();

    // get auth info
    const { isAuthenticated, loading } = useAppSelector( state => state.user );

    if (!loading && !isAuthenticated ) {
        return <Navigate to="/" state={{ from: location }} replace/>;
    }

    return children;
};

export const ProtectedAdminRoute = ({ children }: { children: JSX.Element }) => {
    // location
    const location = useLocation();
    
    // get auth info
    const { isAdmin, isAuthenticated, loading } = useAppSelector( state => state.user );
    
    if (!loading && !isAuthenticated && !isAdmin ) {
        return <Navigate to="/" state={{ from: location }} replace/>;
    }

    return children;
};
