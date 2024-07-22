import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import {Toolbar,Typography } from '@mui/material';
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';

function Icon() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1}}>
        </Typography>
        <IconButton onClick={toggleDarkMode} color="inherit" className="icon-button">
          {isDarkMode ? <LightModeIcon style={{ fontSize: '1.5rem', margin: 0 }} /> : <DarkModeIcon style={{ fontSize: '1.5rem', margin: 0 }} />}
        </IconButton>
      </Toolbar>
  );
}
export default Icon