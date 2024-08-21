import React ,{useState} from 'react'
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


export default function Signup() {
     //Inputs

     const [usernameInput, setUsernameInput] = useState();
     const [emailInput, setEmailInput] = useState();
     const [passwordInput, setPasswordInput] = useState();
     
     //Input error handlers
     
     const [usernameError, setUsernameError] = useState(false);
     const [emailError, setEmailError] = useState(false);
     const [passwordError, setPasswordError] = useState(false);

     //Submit

     const handleSubmit = (event) => {
        event.preventDefault();
        //Send the data to your server or save it in local storage.
        let isValid = true;

        if (isValid) {
            // Send the data to the server
            axios.post('http://localhost:5000/auth/register', {
                username: usernameInput,
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
            
        } else {
            
        }

        
        
        
        // console.log("Username: ", usernameInput);
        // console.log("Email: ", emailInput);
        // console.log("Password: ", passwordInput);


        
        //Reset the inputs
        setUsernameInput('');
        setEmailInput('');
        setPasswordInput('');

        //Reset errors
        setUsernameError(false);
        setEmailError(false);
        setPasswordError(false);
     }


    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>

        <p><TextField id="standard-basic" error={usernameError} label="username"   value={usernameInput} onChange={(event)=>{
            setUsernameInput(event.target.value)
  
        }} variant="standard" fullWidth size='small'/></p> 
        <p><TextField id="standard-basic" error={emailError} label="email" value={emailInput} onChange={(event)=>{
            setEmailInput(event.target.value)
  
        }} variant="standard" fullWidth/></p>
        <p>
        <FormControl  fullWidth size='small' variant="standard">
          <InputLabel error={passwordError} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input error={passwordError} fullWidth size='small' 
            id="standard-adornment-password"
            
            type={showPassword ? 'text' : 'password'}
            value={passwordInput} onChange={(event)=>{
                setPasswordInput(event.target.value)
      
            }}
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
          />
        </FormControl><p/>


        <p></p><Button onClick={handleSubmit} fullWidth startIcon={<LoginIcon />} variant="contained" >SIGN UP</Button></p>
       
    </div>
  )
}
