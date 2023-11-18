import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // phones
      sm: 600, // tablets
      md: 960, // small laptops
      lg: 1280, // laptops
      xl: 1920, // desktops
    },
  },
  palette: {
    primary: {
      main: '#55b7b3', // Główny kolor dla elementów interfejsu użytkownika.
    },
    secondary: {
      main: '#0266c5', // Drugorzędny kolor dla elementów interfejsu użytkownika.
    },
    error: {
      main: '#f44336', // Kolor używany do reprezentowania negatywnych akcji i stanów.
    },
    warning: {
      main: '#e1644e', // Kolor używany do reprezentowania potencjalnie niebezpiecznych akcji lub ważnych wiadomości.
    },
    info: {
      main: '#2196f3', // Kolor używany do reprezentowania informacji i ogłoszeń, które nie reprezentują stanu krytycznego.
    },
    success: {
      main: '#26de81', // Kolor używany do reprezentowania udanych operacji.
    },
    background: {
      default: '#fafafa', // Kolor tła aplikacji.
    },
    common: {
      main: '#b84a12',
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 5,
  },
  // mixins: {},
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0 1px 0 rgba(0, 0, 0, 0.25)',
  ],
  // typography: {},
  // transitions: {},
  // zIndex: {},
});
