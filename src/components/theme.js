import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({

  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#FFFFEE',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#F6F3F3',
    },
    typography: {
      "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
     },
  },
});

export default theme;