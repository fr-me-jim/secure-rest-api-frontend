import React from 'react'
import { useAppSelector } from '../../hooks/redux.hooks';
import { Route, Navigate, useLocation } from "react-router-dom";

export const NotAuthRoute = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();

    // get auth info
    const { isAuthenticated, loading } = useAppSelector( state => state.user );

    if (isAuthenticated && ! loading) {
        return <Navigate to="/" state={{ from: location }} replace/>;
    }

    return children;
};

export const ProtectedRoute = ({ component: Component, ...rest }: { component: React.FC }) => {
    // get auth info
    const { isAuthenticated, loading } = useAppSelector( state => state.user );
    
    return (  
        <Route { ...rest } element={
            <>
                {
                    (props: JSX.IntrinsicAttributes): JSX.Element => {
                        if(isAuthenticated && !loading) return <Component { ...rest } { ...props } />;
                        else return <Navigate to="/" replace/>
                    }
                }
            </>
        } />
    );
};

export const ProtectedAdminRoute = ({ component: Component, ...rest }: { component: React.FC }) => {
    // get auth info
    const { isAdmin, isAuthenticated, loading } = useAppSelector( state => state.user );
    
    return (  
        <Route { ...rest } element={
            <>
                {
                    (props: JSX.IntrinsicAttributes): JSX.Element => {
                        if(isAuthenticated && isAdmin && !loading) return <Component { ...rest } { ...props } />;
                        else return <Navigate to="/" replace/>
                    }
                }
            </>
        } />
    );
};
