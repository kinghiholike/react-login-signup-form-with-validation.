import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import { Typography } from '@mui/material';


export default function Login() {

    //Navigation
    //Navigation
//     const navigate = useNavigate();

//   const handleSignupClick = () => {
//     navigate('/signup'); // Navigate to the signup page
//   };

    // Inputs
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    // Validation errors
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Example: password must be at least 8 characters
        return password.length >= 8;
    };


    //Hnadle the Forgot Password

    const handleForgotPassword = () => {
        alert('Forgot Password');
    };

///Hnadles all the inputs
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Reset errors
        setEmailError('');
        setPasswordError('');

        // Validate inputs
        let isValid = true;

        if (!validateEmail(emailInput)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        }

        if (!validatePassword(passwordInput)) {
            setPasswordError('Password must be at least 8 characters long.');
            isValid = false;
        }

        if (isValid) {
            // Send the data to the server
            axios.post('http://localhost:5000/auth/register', {
                email: emailInput,
                password: passwordInput
            })
            .then(response => {
                console.log('Response:', response.data);
                // Handle successful response
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error
            });

            // Reset the inputs
            setEmailInput('');
            setPasswordInput('');
        }
    }

    return (
        <div>
            <p>
                <TextField 
                    id="standard-basic" 
                    label="Email" 
                    value={emailInput} 
                    onChange={(event) => setEmailInput(event.target.value)} 
                    variant="standard" 
                    fullWidth 
                    size='small'
                    error={!!emailError}
                    helperText={emailError}
                />
            </p>
            <p>
                <FormControl fullWidth size='small' variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input 
                        fullWidth 
                        size='small' 
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={passwordInput} 
                        onChange={(event) => setPasswordInput(event.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        error={!!passwordError}
                    />
                    {passwordError && <p style={{ color: 'red', margin: 0 }}>{passwordError}</p>}
                </FormControl>
            </p>
            <Button 
                startIcon={<LoginIcon />} 
                fullWidth 
                variant="contained"  
                onClick={handleSubmit} 
                style={{ marginTop: '10px' }}
            >
                LOG IN
            </Button>

            <p><Typography variant='h5' onClick={handleForgotPassword} style={{
                fontSize: '10px',
                marginTop: '20px',
                color: '#666666',
                cursor: 'pointer',
                textDecoration: 'underline',
                textTransform: 'none',

                '&:hover': {
                    color: '#007bff'
                }
            }}>Forgot Password?</Typography> </p>

            <p>
                <Typography  variant='h5' style={{
                    fontSize: '10px',
                    marginTop: '20px',
                    color: '#666666',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textTransform: 'none',

                    '&:hover': {
                        color: '#007bff'
                    }
                }} >Don't Have an account signUp!</Typography>
            </p>
            

        </div>
    )
}
