import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './elements/Navbar';
import WithHydrogen from "./pages/WithHydrogen";
import WithoutHydrogen from "./pages/WithoutHydrogen";
import Home from "./pages/Home";
import {useState, useEffect} from "react";
import Footer from "./elements/Footer";
import Notifications from "./elements/Notifications";
import About from "./pages/About";
import Dashboard from './pages/Dashoard';
import axios from "axios";

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const [theme, colorMode] = useMode();

  const [summedData, setSummedData] = useState({
    CO: 10,
    NOx: 5,
    particulateMatter: 2,
    mpg: 10,
  });

  const [averagedData, setAveragedData] = useState({
    CO: 10,
    NOx: 5,
    particulateMatter: 2,
    mpg: 10,
  });

  // poll database for summed and averaged data
  const getAggregateData = () => {
    axios
      .get("http://localhost:8080/api/aggregateData/sumData")
      .then((response) => {
        setSummedData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8080/api/aggregateData/avgData")
      .then((response) => {
        setAveragedData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAggregateData();
  }, []);

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
                element={<Home/>}
              />
              <Route
                exact
                path="home/withHydrogen"
                element={<WithHydrogen data={{ summedData, averagedData }} />}
              />
              <Route
                exact
                path="home/withoutHydrogen"
                element={
                  <WithoutHydrogen data={{ summedData, averagedData }} />
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
