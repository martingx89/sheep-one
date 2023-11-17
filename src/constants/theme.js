import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  // breakpoints: {},
  palette: {
    primary: {
      main: "#55b7b3", // Główny kolor dla elementów interfejsu użytkownika.
    },
    secondary: {
      main: "#0266c5", // Drugorzędny kolor dla elementów interfejsu użytkownika.
    },
    error: {
      main: "#f44336", // Kolor używany do reprezentowania negatywnych akcji i stanów.
    },
    warning: {
      main: "#ff9800", // Kolor używany do reprezentowania potencjalnie niebezpiecznych akcji lub ważnych wiadomości.
    },
    info: {
      main: "#2196f3", // Kolor używany do reprezentowania informacji i ogłoszeń, które nie reprezentują stanu krytycznego.
    },
    success: {
      main: "#4caf50", // Kolor używany do reprezentowania udanych operacji.
    },
    background: {
      default: "#fafafa", // Kolor tła aplikacji.
    },
    common: {
      main: '#b84a12',
    }
  },
  // spacing: {},
  shape: {
    borderRadius: 4
  },
  // mixins: {},
  // shadows: {},
  // typography: {},
  // transitions: {},
  // zIndex: {},
});
