// import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

// routes
import { 
    NotAuthRoute,
    // ProtectedRoute,
    // ProtectedAdminRoute
} from './Protected.routes';

// components
import Login from '../layout/Auth/Login';
import Signin from '../layout/Auth/Signin';
// import Admin from 'components/layout/Admin/Admin';
// import Files from 'components/layout/Files/Files';
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
            {/* <NotAuthRoute caseSensitive path="/login" element={ <Login /> } /> */}
            {/* <NotAuthRoute exact path="/signin" component={ Signin } />

            <ProtectedRoute exact path="/user/files" component={ UserFiles } />
            <ProtectedRoute exact path="/files/public" component={ Files } />
            <ProtectedRoute exact path="/upload" component={ UploadFile } />

            <ProtectedAdminRoute exact path="/admin" component={ Admin } /> */}
        </Switch>
    );
};
 
export default Routes;