// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

import axios from 'axios';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signUpStart, signUpSuccess, signUpFailure, signUpWarning } from '../app/user/userSlice'


const defaultTheme = createTheme();

export default function SignUpForm() {
    const { error, loading, signUpAlert, signUpWarn } = useSelector((state) => state.user);

    console.log(error)

    const dispatch = useDispatch();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(signUpStart());
            const data = new FormData(event.currentTarget);
            const formData = {
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                email: data.get('email'),
                password: data.get('password'),
            };
            const res = await axios.post("/api/auth/signup", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.data == "User Created") {
                dispatch(signUpSuccess());
                console.log(res.data);
            } else if (res.data == "User Already Exists") {
                dispatch(signUpWarning());
            }
            else {
                console.log(res.data)
                dispatch(signUpFailure())
            }
        } catch (error) {
            dispatch(signUpFailure(error.message));
            console.log(error)
        }
    };

    return (
        <div>
            <div className='mx-auto flex flex-col justify-center'>
                {signUpAlert && <Alert className='mb-7' severity="success">{signUpAlert}</Alert>}
                {error && <Alert className='mb-7' severity="error">{error}</Alert>}
                {signUpWarn && <Alert className='mb-7' severity="warning">{signUpWarn}</Alert>}
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
                            Sign up
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
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
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onSubmit={handleSubmit}

                            >
                                {loading ? "Please Wait..." : "Sign Up"}
                            </Button>
                            {/* <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="" variant="body2">
                                    Already have an account? Sign in
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