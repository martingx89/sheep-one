import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4400', // Główny kolor dla elementów interfejsu użytkownika.
    },
    secondary: {
      main: '#f44336', // Drugorzędny kolor dla elementów interfejsu użytkownika.
    },
    error: {
      main: '#f44336', // Kolor używany do reprezentowania negatywnych akcji i stanów.
    },
    warning: {
      main: '#ff9800', // Kolor używany do reprezentowania potencjalnie niebezpiecznych akcji lub ważnych wiadomości.
    },
    info: {
      main: '#2196f3', // Kolor używany do reprezentowania informacji i ogłoszeń, które nie reprezentują stanu krytycznego.
    },
    success: {
      main: '#4caf50', // Kolor używany do reprezentowania udanych operacji.
    },
    background: {
      default: '#fafafa', // Kolor tła aplikacji.
    },
  },
});
