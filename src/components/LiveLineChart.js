import React, { useState, useEffect, useContext } from 'react';
import CustomResponsiveLine from './CustomResponsiveLine';
import { LiveDataContext } from '../context/LiveData';


const LiveLineChart = ({ botAxisLabel, leftAxisLabel }) => {
  const {data, popNextDatapoint} = useContext(LiveDataContext)
  const [lines, setLines] = useState([{ id: "line1", data: data }]);

  // Function to add a new random data point to the chart data
  const addDataPoint = () => {

    setLines((prevData) => {
      const newData = prevData.map((lineData) => ({
        ...lineData,
        data: [...lineData.data, popNextDatapoint()],
      }));

      // Trim data to a maximum length (e.g., to keep the chart from getting too long)
      const maxDataLength = 50;
      if (newData[0].data.length > maxDataLength) {
        newData.forEach((lineData) => {
          lineData.data.shift();
        });
      }

      return newData;
    });
  };

  // Simulate adding a random data point every second
  useEffect(() => {
    const intervalId = setInterval(addDataPoint, 1000); // Add data point every second

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  return (
    <CustomResponsiveLine
      data={lines}
      botAxisLabel= {botAxisLabel}
      leftAxisLabel= {leftAxisLabel}
    />
  );
};

export default LiveLineChart;
