import React from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRoutes } from "./redux/reducers/routesRedux";
import { fetchBikes } from "./redux/reducers/bikesRedux";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import BlankPage from "./components/pages/BlankPage/BlankPage";
import { Container } from "@mui/material";
import Navbar from "./components/views/Navbar/Navbar";
import Rules from "./components/pages/Rules/Rules";
import Footer from "./components/views/Footer/Footer";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4400", // Główny kolor dla elementów interfejsu użytkownika.
    },
    secondary: {
      main: "#f44336", // Drugorzędny kolor dla elementów interfejsu użytkownika.
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
  },
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoutes())
      .catch(error => {
        console.error("Failed to fetch routes:", error);
      });
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchBikes())
      .catch(error => {
        console.error("Failed to fetch bikes:", error);
      });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/rules" element={<Rules />}></Route>
            <Route path="*" element={<BlankPage />}></Route>
          </Routes>
          <Footer />
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default App;
