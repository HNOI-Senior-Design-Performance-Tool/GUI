import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './elements/Navbar';
import ForHydrogen from "./pages/ForHydrogen";
import AgainstConventional from "./pages/AgainstConventional";
import Home from "./pages/Home";
import {useState} from "react";
import Footer from "./elements/Footer";
import Notifications from "./elements/Notifications";
import About from "./pages/About";

function App() {

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

    setInterval(function () {
        // System re-fetches data from the API every 60 seconds, should suffice for the purpose of this project
        //todo add axios call to API here
        setData("hello")
    }, 60000)

    return (
      <div id="page-container">

        {/*Navbar*/}
        <Navbar/>

        {/*Main Content*/}
        <div id="content-wrap">
          <Routes>
              <Route exact path="home" element={<Home data={data}/>}/>
              <Route exact path="for_hydrogen" element={<ForHydrogen data={data}/>}/>
              <Route exact path="against_conventional" element={<AgainstConventional data={data}/>}/>
              <Route exact path="about" element={<About/>}/>
              <Route
                path="*"
                element={<Navigate to="home" replace/>}/>
          </Routes>
        </div>

        {/*Footer*/}
        <Footer/>

        {/*Notifications*/}
        <Notifications/>

      </div>
  );
}

export default App;
