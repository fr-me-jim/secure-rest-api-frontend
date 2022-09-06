import { useState, useCallback, useEffect } from 'react';
// import { useCookies } from 'react-cookie';
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

// assets
// import google from 'assets/google-icon.png';

// actions
import { loginAction } from '../../../redux/actions/auth.actions';

// service
import { getCSRFTokenService } from "../../../service/auth.services";

const Login = (): JSX.Element => {

    // get state
    const { error, message } = useAppSelector( state => state.user );

    // state
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const [ errForm, setErrForm ] = useState<boolean>(false);
    const [ errFormMessage, setErrFormMessage ] = useState<string>("");

    // dispatch
    const dispatch = useAppDispatch();

    const login = useCallback(
        async (email: string, password: string) => await dispatch( loginAction({email, password}) ),
        [ dispatch ]
    );

    const getCRSFToken = useCallback(
        getCSRFTokenService,
        [],
    );
    
     

    const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( email.trim() === '' || email === null || password.trim() === '' || password === null ) {
            setErrForm(true);
            setErrFormMessage("All fields are mandatory!");
            return;
        } else {
            setErrForm(false);
            setErrFormMessage("");
        };

       try {
            await login(email, password);
       } catch (error: unknown) {
            return;
       }
    };
    
    const handleClickLoginGoogle = () => {
        window.open("https://ias.jediupc.com/api/auth/google", "_self");
    };

    useEffect(() => {
        const queryToAPI = async () => await getCRSFToken();

        queryToAPI();
    }, [ getCRSFToken ]);

    return (  
        <Grid container item xs={12} md={10} lg={8} xl={6} className="w-100">
            <Paper elevation={3} className="auth-paper">
                <Grid component="form" container justifyContent="center" onSubmit={ handleSubmitLogin }>
                    <Grid container item justifyContent="center" component="header" xs={12} >
                        <Typography variant="h3" align="center" className="text-primary"> 
                            LOGIN 
                        </Typography>
                    </Grid>


                    {
                        error ?
                        <Grid item xs={12} className="p-3">
                            <Alert severity="error" className="centered-alert"> 
                                { message }
                            </Alert>
                        </Grid> : null
                    }

                    {
                        errForm ?
                        <Grid item xs={12} className="p-3">
                            <Alert severity="error" className="centered-alert"> 
                                { errFormMessage }
                            </Alert>
                        </Grid> : null
                    }  

                    <Grid item xs={12} container justifyContent="center" className="p-3">
                        <FormControl className="form-controls">
                            <label htmlFor="email-login">Email</label>
                            <input type="email" id="email-login" name="email-login" 
                                className="auth-input" placeholder="example@domain.com"
                                onChange={ e => setEmail(e.target.value) }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center" className="p-3">
                        <FormControl className="form-controls">
                            <label htmlFor="password-login">Password</label>
                            <input type="password" id="password-login" name="password-login" 
                                className="auth-input" placeholder="********"
                                onChange={ e => setPassword(e.target.value) }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center" className="p-3">
                        <Button type="submit" variant="contained"
                            className="app-btn-primary w-50"
                        > LOGIN </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <span className="w-100 d-flex justify-content-center align-items-center">
                            <hr className="me-2 w-25"/> or <hr className="ms-2 w-25" />
                        </span>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center" className="p-3">
                        <Button type="button" variant="contained"
                            className="app-btn-secondary w-50"
                            onClick={ handleClickLoginGoogle }
                        >
                            <span>
                                {/* <img src={ google } alt="google-icon" 
                                    width={60}
                                /> */}
                                LOGIN WITH GOOGLE
                            </span> 
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};
 
export default Login;
