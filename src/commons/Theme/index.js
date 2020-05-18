import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#388E3C',
    secondary: '#FFEB3B',
    error: '#E64A19',
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
  shape: {
    borderRadius: 5,
    backgroundColor: '#212121',
    textColor: '#fff',
    borderColor: '#cccccc',
  },
});

export default theme;
