// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// Redux 
import { useSelector, useDispatch } from 'react-redux'
import { adminSignInStart, adminSignInSuccess, adminSignInFailure, adminSignInWarning } from '../app/admin/adminSlice'

import Alert from '@mui/material/Alert';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AdminSignInForm() {
    // const signInError = useSelector(state => state.user.signInError);
    const { error, loading, adminSignInError, adminSignInWarn, } = useSelector((state) => state.admin);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(adminSignInError);
    }, [adminSignInError]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(adminSignInStart());
            const data = new FormData(event.currentTarget);
            const formData = {
                email: data.get('email'),
                password: data.get('password')
            };
            const res = await axios.post("/api/auth/adminsignin", formData)
            console.log(res);
            if (res.data.message === "Admin logged in successfully") {
                dispatch(adminSignInSuccess(res.data.admin));
                navigate("/dashboard");
            } else {
                dispatch(adminSignInFailure(res.data.message))
            }

        } catch (error) {
            if (error.response && error.response.status === 401) {
                dispatch(adminSignInWarning(error));
            }
            dispatch(adminSignInFailure(error.message));
            console.log(error.message)

        }
    };
    return (
        <div>
            <div className='max-w-sm mx-auto flex flex-col justify-center'>
                {adminSignInWarn && <Alert className='mb-7' severity="warning">{adminSignInWarn}</Alert>}
                {error && <Alert className='mb-7' severity="error">{error}</Alert>}
            </div>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs" className='glass'>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Seller Sign In
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit} >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {loading ? "Please Wait..." : "Sign In"}
                            </Button>
                            {/* <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    Do Not Have an Account? Sign Up
                                </Link>
                            </Grid>
                        </Grid> */}
                        </Box>
                    </Box>
                    {/* <Copyright sx={{ mt: 5 }} /> */}
                </Container>
            </ThemeProvider>
        </div>
    );
}