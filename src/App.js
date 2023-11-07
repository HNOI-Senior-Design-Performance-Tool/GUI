import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './elements/Navbar';
import WithHydrogen from "./pages/WithHydrogen";
import WithoutHydrogen from "./pages/WithoutHydrogen";
import Home from "./pages/Home";
import {useState} from "react";
import Footer from "./elements/Footer";
import Notifications from "./elements/Notifications";
import About from "./pages/About";
import Dashboard from './pages/Dashoard';
import axios from "axios";

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
    const [theme, colorMode] = useMode();

    const [averagedData, setAveragedData] = useState({
      average_CO2_emissions: 10,
      average_NOx_emissions: 5,
      average_PM_emissions: 2,
      average_MPG: 0,
    });

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div id="page-container">
            {/*Navbar*/}
            <Navbar />

            {/*Main Content*/}
            <div id="content-wrap">
              <Routes>
                <Route
                  exact
                  path="home"
                  element={<Home data={averagedData} />}
                />
                <Route
                  exact
                  path="home/withHydrogen"
                  element={<WithHydrogen data={averagedData} />}
                />
                <Route
                  exact
                  path="home/withoutHydrogen"
                  element={<WithoutHydrogen data={averagedData} />}
                />
                <Route exact path="about" element={<About />} />
                <Route exact path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="home" replace />} />
              </Routes>
            </div>

            {/*Footer*/}
            <Footer />

            {/*Notifications*/}
            <Notifications />
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export default App;
