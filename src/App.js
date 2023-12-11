import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './elements/Navbar';
import WithHydrogen from "./pages/WithHydrogen";
import WithoutHydrogen from "./pages/WithoutHydrogen";
import Home from "./pages/Home";
import Footer from "./elements/Footer";
import Notifications from "./elements/Notifications";
import About from "./pages/About";
import Dashboard from './pages/Dashoard';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { VehicleProvider } from "./context/VehicleContext";
import { AggregateDataProvider } from "./context/AggregateDataContext";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <VehicleProvider>
          <AggregateDataProvider>
            <CssBaseline />
            <div id="page-container">
              {/*Navbar*/}
              <Navbar />

              {/*Main Content*/}
              <div id="content-wrap">
                <Routes>
                  <Route exact path="home" element={<Home/>} />
                  <Route
                    exact
                    path="home/withHydrogen"
                    element={<WithHydrogen/>}
                  />
                  <Route
                    exact
                    path="home/withoutHydrogen"
                    element={
                      <WithHydrogen/>
                    }
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
          </AggregateDataProvider>
        </VehicleProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
