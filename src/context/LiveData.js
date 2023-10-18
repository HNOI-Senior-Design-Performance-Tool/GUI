import axios from 'axios';
import {createContext, useState, useEffect} from 'react'
import moment from 'moment'; 

export const LiveDataContext = createContext();

export const LiveDataProvider = ({ children }) => {

    // Implement data buffer
    const [data, setData] = useState([]);

    // poll database for all new datapoints and push them to the buffer
    const pollDatabase = async () => {

        axios
          .get("http://localhost:8080/api/vehicleData/latestDataGT")
          .then((response) => {
            setData(data.concat(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
    }

    let popNextDatapoint = async () => {
      let datapoint = data[0]
      setData(data.slice(1, data.length))
      return datapoint
    }


    useEffect(() => {
      const intervalId = setInterval(pollDatabase, 1000); // Add data point every second

      return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, []);

    let contextData = {
      data: data,
      popNextDatapoint: popNextDatapoint
    };

    return (
      <LiveDataContext.Provider value={contextData}>
        {children}
      </LiveDataContext.Provider>
    );

}