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
import Admin from "./pages/Admin";
import Dashboard from './pages/Dashoard';
import axios from "axios";

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
    const [theme, colorMode] = useMode();

    const [data, setData] = useState({
        liveDataFeed: {
            // Data from the cars current setup (semi-live dependent on API state)
            "0" : "0"
        },
        historicalData: {
            // Data for when the car was driven with traditional fuel
            "0" : "0"
        }
    });

    // setInterval(function () {
    //     // System re-fetches data from the API every 60 seconds, should suffice for the purpose of this project
    //     //todo add axios call to API here
    //     return axios
    //         .post('http://localhost:8080/getData')
    //         .then(data => {
    //             console.log("Data fetched from API: " + data.data)
    //             setData(data)
    //         }).catch(err => err);
    //     }, 30000)

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
                <Route exact path="home" element={<Home data={data} />} />
                <Route
                  exact
                  path="home/withHydrogen"
                  element={<WithHydrogen data={data} />}
                />
                <Route
                  exact
                  path="home/withoutHydrogen"
                  element={<WithoutHydrogen data={data} />}
                />
                <Route exact path="about" element={<About />} />
                <Route exact path="admin" element={<Dashboard />} />
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
