import { useState, useCallback } from 'react';
// import { useCookies } from 'react-cookie';
import { useAppDispatch } from '../../../hooks/redux.hooks';

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

const Login = (): JSX.Element => {

    // hooks
    // const history = useHistory();

    // cookies
    // const [, setCookie] = useCookies();
    
    // get oauth param
    // var url = new URL(window.location.href);
    // var oauth = url.searchParams.get("oauth");

    // state
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ errForm, setErrForm ] = useState<boolean>(false);
    const [ errFormMessage, setErrFormMessage ] = useState<string>("");

    // dispatch
    const dispatch = useAppDispatch();

    const login = useCallback(
        (email: string, password: string) => dispatch( loginAction({email, password}) ),
        [ dispatch ]
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
            const action = await login(email, password);
            console.log(action)
            // if (action.error) {
            //     setErrForm(true);
            // }
       } catch (error: unknown) {
            console.log(error)
       }
    };
    
    const handleClickLoginGoogle = () => {
        window.open("https://ias.jediupc.com/api/auth/google", "_self");
    };

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
