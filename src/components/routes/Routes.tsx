// import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

// routes
import { 
    NotAuthRoute,
    ProtectedRoute,
    // ProtectedAdminRoute
} from './Protected.routes';

// components
import Login from '../layout/Auth/Login';
import Signin from '../layout/Auth/Signin';
// import Admin from 'components/layout/Admin/Admin';
import Orders from '../layout/Orders/Orders';
import Products from '../layout/Products/Products';
// import UserFiles from 'components/layout/Files/UserFiles';
// import UploadFile from 'components/layout/Files/UploadFile';
import Home from '../layout/Home';

const Routes = (): JSX.Element => {
    return (  
        <Switch>
            <Route caseSensitive path="/" element={ <Home /> } />
 
            <Route caseSensitive path="/login" element={
                <NotAuthRoute>
                    <Login />
                </NotAuthRoute>
            } />
            <Route caseSensitive path="/signin" element={
                <NotAuthRoute>
                    <Signin />
                </NotAuthRoute>
            } />
            <Route caseSensitive path="/products" element={
                <ProtectedRoute>
                    <Products />
                </ProtectedRoute>
            } />
            <Route caseSensitive path="/orders" element={
                <ProtectedRoute>
                    <Orders />
                </ProtectedRoute>
            } />
        </Switch>
    );
};
 
export default Routes;