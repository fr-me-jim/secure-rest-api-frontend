// import React from 'react';
// import { useCookies } from 'react-cookie';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

// hooks
import { useAppSelector, useAppDispatch } from "../../hooks/redux.hooks";
// axios
// import axios from 'config/axios';

// material-ui
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// css
import '../../css/Navbar.css';

// actions
import { logoutAction } from '../../redux/actions/auth.actions';

const Navbar = (): JSX.Element => {

    // hooks
    const redirect = useNavigate();
    // const [ cookies, , removeCookie ] = useCookies();

    // get state
    const { isAdmin, isAuthenticated } = useAppSelector( state => state.user );

    // actions
    const dispatch = useAppDispatch();

    const logout = async () => await dispatch( logoutAction() );

    const handleLogOut = async () => {
        await logout();

        redirect("/");
        // // also delete session cookie
        // axios.defaults.headers.Authorization = '';
        // if(cookies.token) removeCookie('token', { path:'/', sameSite: 'lax', secure: true });
        // history.push('/');
    };

    return (  
        <Grid item component="header" className="main-header" xs={12} >
            <AppBar component="div" className="bg-light px-3" elevation={3}>
                <Toolbar className="toolbar">
                    <Typography variant="h4" className="title">
                        <NavLink caseSensitive to="/" className="title-link" > 
                            E-Commerce
                        </NavLink>
                    </Typography>

                    {
                        !isAuthenticated &&
                        <NavLink caseSensitive to="/login" className="nav-link p-0">
                            <Typography variant="body1" className="nav-link-text mx-1 px-1" >
                                <b>Login</b>
                            </Typography>
                        </NavLink>
                    }

                    {
                        !isAuthenticated &&
                        <NavLink caseSensitive to="/signin" className="nav-link p-0">
                            <Typography variant="body1" className="nav-link-text mx-1 px-1" >
                                <b>Signin</b>
                            </Typography>
                        </NavLink>
                    }

                    {
                        isAuthenticated && isAdmin &&
                        <NavLink caseSensitive to="/admin"  className="nav-link p-0">
                            <Typography variant="body1" className="nav-link-text mx-1 px-1" >
                                <b>Admin</b>
                            </Typography>
                        </NavLink>
                    }

                    {
                        isAuthenticated &&
                        <NavLink caseSensitive to="/files/public"  className="nav-link p-0">
                            <Typography variant="body1" className="nav-link-text mx-1 px-1" >
                                <b>Public Files</b>
                            </Typography>
                        </NavLink>
                    }
                    

                    {
                        isAuthenticated &&
                        <NavLink caseSensitive to="/user/files"  className="nav-link p-0">
                            <Typography variant="body1" className="nav-link-text mx-1 px-1" >
                                <b>My files</b>
                            </Typography>
                        </NavLink>
                    }

                    {
                        isAuthenticated &&
                        <NavLink caseSensitive to="/upload"  className="nav-link p-0">
                            <Typography variant="body1" className="nav-link-text mx-1 px-1" >
                                <b>Upload</b>
                            </Typography>
                        </NavLink>
                    }

                    {
                        isAuthenticated &&
                        <Button variant="contained" onClick={ handleLogOut }
                            className="app-btn-primary ms-md-1"
                        > Logout </Button>
                    }
                </Toolbar>
            </AppBar>
        </Grid>
    );
};
 
export default Navbar;
