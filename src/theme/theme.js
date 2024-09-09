
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      
      `,
    },
  },
  palette: {
  'primary'  :{
    main:'#90386B'
  }
  }

});

export default theme ;