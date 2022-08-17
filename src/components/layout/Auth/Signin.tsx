import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

// redux
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks';

// material-ui
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

// css
import '../../../css/Auth.css';

// actions
import { signinAction } from '../../../redux/actions/auth.actions';

// interfaces
import { ISigninUserData } from '../../../interfaces/auth.interface';


const Login = () => {

    // hooks
    const redirect = useNavigate();
    // const [, setCookie ] = useCookies();

    // get state
    const { error, message } = useAppSelector( state => state.user );

    // state
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ repeatPwd, setRepeatPwd ] = useState<string>('');
    const [ firstName, setFirstName ] = useState<string>('');
    const [ secondName, setSecondName ] = useState<string>('');

    const [ errForm, setErrForm ] = useState<boolean>(false);
    const [ errFormMessage, setErrFormMessage ] = useState<string>("");
    
    // dispatch
    const dispatch = useAppDispatch();

    const signin = async (userSigninData: ISigninUserData) => dispatch( signinAction(userSigninData) );

    const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( email.trim() === '' || email === null || repeatPwd.trim() === '' || repeatPwd === null 
            || password.trim() === '' || password === null || firstName.trim() === '' || firstName === null
            || secondName.trim() === '' || secondName === null 
        ) {
            setErrForm(true);
            setErrFormMessage("All fields are mandatory!");
            return;
        } else {
            setErrForm(false);
            setErrFormMessage("");
        };

        if (password.trim().length < 20) {
            setErrForm(true);
            setErrFormMessage("Password can not be less than 20 characaters!");
            return;
        } else {
            setErrForm(false);
            setErrFormMessage("");
        };

        if (repeatPwd !== password ) {
            setErrForm(true);
            setErrFormMessage("Passwords don't match!");
            return;
        } else {
            setErrForm(false);
            setErrFormMessage("");
        };

        const userSigninData: ISigninUserData = {
            email,
            password,
            firstName,
            secondName,
            privileges: 0
        };

        try {
            // const { data: { token } } = await axios.post('/signin', { ...user });
            // if (token) setCookie("token", token, { path: '/', sameSite: 'lax', secure: true });
            // axios.defaults.headers.Authorization = `Bearer ${token}`;

            const result = await signin(userSigninData);
            if (result) redirect('/');
        } catch (err: unknown) {
            return;
        }

        return;
    };

    return (  
        <Grid container item xs={12} md={10} lg={8} xl={6} className="w-100">
            <Paper elevation={3} className="auth-paper">
                <Grid component="form" container justifyContent="center" onSubmit={ handleSubmitLogin }>
                    <Grid container item justifyContent="center" component="header" xs={12} >
                        <Typography variant="h3" align="center" className="text-primary"> 
                            Create an account 
                        </Typography>
                    </Grid>

                    {
                        errForm || error ?
                        <Grid item xs={12} className="p-3">
                            {
                                error && 
                                <Alert severity="error" className="centered-alert"> 
                                    { message } 
                                </Alert>
                            }

                            {
                                errForm && 
                                <Alert severity="error" className="centered-alert"> 
                                    { errFormMessage } 
                                </Alert>
                            }
                        </Grid> : null
                    }  

                    <Grid item xs={6} container justifyContent="center" className="p-3">
                        <FormControl className="form-controls w-75">
                            <label htmlFor="email-signin">Email</label>
                            <input type="email" id="email-signin" name="email-signin" 
                                className="auth-input" placeholder="example@domain.com"
                                onChange={ e => setEmail(e.target.value) }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} container justifyContent="center" className="p-3">
                        <FormControl className="form-controls w-75">
                            <label htmlFor="firstName-signin">First Name</label>
                            <input type="text" id="firstName-signin" name="firstName-signin" 
                                className="auth-input" placeholder="John Doe"
                                onChange={ e => setFirstName(e.target.value) }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} container justifyContent="center" className="p-3">
                        <FormControl className="form-controls w-75">
                            <label htmlFor="secondName-signin">Second Name</label>
                            <input type="password" id="secondName-signin" name="secondName-signin" 
                                className="auth-input" placeholder="Minimum 8 characters"
                                onChange={ e => setSecondName(e.target.value) }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} container justifyContent="center" className="p-3">
                        <FormControl className="form-controls w-75">
                            <label htmlFor="password-signin">Password</label>
                            <input type="password" id="password-signin" name="password-signin" 
                                className="auth-input" placeholder="Minimum 20 characters"
                                onChange={ e => setPassword(e.target.value) }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} container justifyContent="center" className="p-3">
                        <FormControl className="form-controls w-75">
                            <label htmlFor="password-repeat-signin">Repeat Password</label>
                            <input type="password" id="password-repeat-signin" name="password-repeat-signin" 
                                className="auth-input" placeholder="********"
                                onChange={ e => setRepeatPwd(e.target.value) }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center" className="p-3">
                        <Button type="submit" variant="contained"
                            className="app-btn-primary w-50"
                        > Signin </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};
 
export default Login;