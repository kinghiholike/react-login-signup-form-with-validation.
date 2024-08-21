import * as React from 'react';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';

export default function SimplePaper() {

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };


  return (
    <div className='App'>
      <Paper elevation={3} style={{
        padding: '20px'
      }}>
        {checked ? (
      <Chip icon={<FaceIcon />} label="Sign Up" color="primary" variant="outlined" />
        ) : (
      
      <Chip icon={<LockIcon />} label="Log In" color="primary" variant="outlined" />
        )}
      
      <br></br>

      <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />

    <br></br>

    {checked ? (
      <Signup/>
        ) : (
      
      <Login />
        )}
      </Paper>
    </div>
      
    
  );
}
