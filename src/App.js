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
import {ThemeProvider } from '@mui/material/styles';
import { theme } from "./constants/theme";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoutes());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchBikes());
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
