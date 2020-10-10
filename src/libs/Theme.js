import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { blue, pink, deepOrange} from '@material-ui/core/colors'
import { darken } from '@material-ui/core/styles/'

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: blue[700]
      },
      secondary: {
        main: darken(pink.A400, 0.1)
      },
      background: {
        default: '#fff'
      }
    }
  })
);

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: blue[200]
      },
      secondary: {
        main: pink[200]
      },
      background: {
        default: '#121212'
      },
      error: deepOrange
    }
  })
);
